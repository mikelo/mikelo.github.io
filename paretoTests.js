function createObj(arr) {
	return {
		name: "asfd",
		values: arr,
		rank: 1000
	}
}

QUnit.test( "dominates one-dimension", function( assert ) {
  assert.deepEqual( dominates(createObj([1]), createObj([2])), true, "Passed!" );
  assert.deepEqual( dominates(createObj([2]), createObj([1])), false, "Passed!" );
  assert.deepEqual( dominates(createObj([1]), createObj([1])), false, "Passed!" );
});
QUnit.test( "dominates two-dimensions", function( assert ) {
  assert.deepEqual( dominates(createObj([1, 1]), createObj([1, 2])), true, "Passed!" );
  assert.deepEqual( dominates(createObj([1, 1]), createObj([2, 1])), true, "Passed!" );
  assert.deepEqual( dominates(createObj([1, 1]), createObj([2, 2])), true, "Passed!" );
  assert.deepEqual( dominates(createObj([2, 1]), createObj([1, 1])), false, "Passed!" );
  assert.deepEqual( dominates(createObj([2, 1]), createObj([1, 2])), false, "Passed!" );
  assert.deepEqual( dominates(createObj([1, 1]), createObj([1, 1])), false, "Passed!" );
});
QUnit.test( "isParetoOptimal1", function( assert ) {
  var items = [
      createObj([1, 2]),
      createObj([2, 1]),
      createObj([2, 2]),
  ];
  assert.deepEqual( isParetoOptimal(0, items, 1), true, "Passed!" );
  assert.deepEqual( isParetoOptimal(1, items, 1), true, "Passed!" );
  assert.deepEqual( isParetoOptimal(2, items, 1), false, "Passed!" );
});
QUnit.test( "isParetoOptimal1", function( assert ) {
  var items = [
      createObj([1, 2]),
      createObj([2, 1]),
      createObj([1, 1]),
  ];
  assert.deepEqual( isParetoOptimal(0, items, 1), false, "Passed!" );
  assert.deepEqual( isParetoOptimal(1, items, 1), false, "Passed!" );
  assert.deepEqual( isParetoOptimal(2, items, 1), true, "Passed!" );
});
QUnit.test( "pareto ranking total", function( assert ) {
  var items = [
      createObj([1]),
      createObj([2]),
      createObj([3]),
  ];
  determineParetoRanking(items);
  assert.deepEqual( items[0].rank, 1, "Passed!" );
  assert.deepEqual( items[1].rank, 2, "Passed!" );
  assert.deepEqual( items[2].rank, 3, "Passed!" );
});
QUnit.test( "pareto ranking 2 1", function( assert ) {
  var items = [
      createObj([1, 2]),
      createObj([2, 1]),
      createObj([2, 2]),
  ];
  determineParetoRanking(items);
  assert.deepEqual( items[0].rank, 1, "Passed!" );
  assert.deepEqual( items[1].rank, 1, "Passed!" );
  assert.deepEqual( items[2].rank, 2, "Passed!" );
});
QUnit.test( "pareto ranking 1 2", function( assert ) {
  var items = [
      createObj([1, 2]),
      createObj([2, 1]),
      createObj([1, 1]),
  ];
  determineParetoRanking(items);
  assert.deepEqual( items[0].rank, 2, "Passed!" );
  assert.deepEqual( items[1].rank, 2, "Passed!" );
  assert.deepEqual( items[2].rank, 1, "Passed!" );
});
