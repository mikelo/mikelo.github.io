import json

def json_resume_to_markdown(json_file, output_file):
    """
    Converts a JSON Resume to Markdown format.

    :param json_file: Path to the JSON Resume file.
    :param output_file: Path to save the Markdown file.
    """
    try:
        # Load JSON data
        with open(json_file, 'r', encoding='utf-8') as f:
            resume = json.load(f)

        # Start building the Markdown content
        markdown = []

        # Basics
        basics = resume.get('basics', {})
        markdown.append(f"# {basics.get('name', '')}")
        markdown.append(f"**{basics.get('label', '')}**\n")
        markdown.append(f"- 📧 {basics.get('email', '')}")
        markdown.append(f"- 📞 {basics.get('phone', '')}")
        markdown.append(f"- 🌐 [{basics.get('website', '')}]({basics.get('website', '')})")
        markdown.append(f"- 📍 {basics.get('location', {}).get('city', '')}, {basics.get('location', {}).get('countryCode', '')}\n")

        # Profiles
        if 'profiles' in basics:
            markdown.append("### Profiles")
            for profile in basics['profiles']:
                markdown.append(f"- [{profile.get('network', '')}]({profile.get('url', '')}): {profile.get('username', '')}")
            markdown.append("")

        # Work Experience
        if 'work' in resume:
            markdown.append("## Work Experience")
            for job in resume['work']:
                markdown.append(f"### {job.get('position', '')}")
                markdown.append(f"**{job.get('company', '')}**")
                markdown.append(f"{job.get('startDate', '')} - {job.get('endDate', '')}")
                markdown.append(f"{job.get('summary', '')}\n")
            markdown.append("")

        # Education
        if 'education' in resume:
            markdown.append("## Education")
            for edu in resume['education']:
                markdown.append(f"### {edu.get('studyType', '')} in {edu.get('area', '')}")
                markdown.append(f"**{edu.get('institution', '')}**")
                markdown.append(f"{edu.get('startDate', '')} - {edu.get('endDate', '')}\n")
            markdown.append("")

        # Skills
        if 'skills' in resume:
            markdown.append("## Skills")
            for skill in resume['skills']:
                markdown.append(f"- **{skill.get('name', '')}**: {skill.get('level', '')}")
            markdown.append("")

        # Write to Markdown file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("\n".join(markdown))

        print(f"Markdown resume saved to {output_file}")
    except Exception as e:
        print(f"Error: {e}")

# Example usage
json_file = 'resume.json'  # Path to your JSON Resume file
output_file = 'resume.md'  # Path to save the Markdown file
json_resume_to_markdown(json_file, output_file)