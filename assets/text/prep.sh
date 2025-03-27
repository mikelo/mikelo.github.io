#!/usr/bin/sh
# https://access.redhat.com/articles/7030468

export ROSA_CLUSTER_NAME=$(oc get infrastructure cluster -o jsonpath='{.status.infrastructureName}' | sed 's/-[a-z0-9]\{5\}$//')
# export ROSA_CLUSTER_ID=$(rosa describe cluster -c ${ROSA_CLUSTER_NAME} --output json | jq -r .id)
export ROSA_CLUSTER_ID=$(oc get clusterversion version -o jsonpath='{.spec.clusterID}{"\n"}')
# export REGION=$(rosa describe cluster -c ${ROSA_CLUSTER_NAME} --output json | jq -r .region.id)
export REGION=$(oc get infrastructure cluster -o jsonpath='{.status.platformStatus.aws.region}{"\n"}')
export AWS_ACCOUNT_ID=`aws sts get-caller-identity --query Account --output text`
export AWS_PAGER=""
export SCRATCH="/tmp/${ROSA_CLUSTER_NAME}/clf-cloudwatch-vector"
mkdir -p ${SCRATCH}
echo "Cluster ID: ${ROSA_CLUSTER_ID}, Region: ${REGION}, AWS Account ID: ${AWS_ACCOUNT_ID}"


POLICY_ARN=$(aws iam list-policies --query "Policies[?PolicyName=='RosaCloudWatch'].{ARN:Arn}" --output text)
if [[ -z "${POLICY_ARN}" ]]; then
cat << EOF > ${SCRATCH}/policy.json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:DescribeLogGroups",
                "logs:DescribeLogStreams",
                "logs:PutLogEvents",
                "logs:PutRetentionPolicy"
            ],
            "Resource": "arn:aws:logs:*:*:*"
        }
    ]
}
EOF
POLICY_ARN=$(aws iam create-policy --policy-name "RosaCloudWatch" \
--policy-document file:///${SCRATCH}/policy.json --query Policy.Arn --output text)
fi
echo ${POLICY_ARN}

aws iam create-user \
    --user-name $ROSA_CLUSTER_NAME-cloud-watch \
    > $SCRATCH/aws-user.json

aws iam create-access-key \
    --user-name $ROSA_CLUSTER_NAME-cloud-watch \
    > $SCRATCH/aws-access-key.json

aws iam attach-user-policy \
    --user-name $ROSA_CLUSTER_NAME-cloud-watch \
    --policy-arn ${POLICY_ARN}

echo "AccessKeyId: `cat $SCRATCH/aws-access-key.json | jq -r '.AccessKey.AccessKeyId'`"
echo "SecretAccessKey: `cat $SCRATCH/aws-access-key.json | jq -r '.AccessKey.SecretAccessKey'`" 