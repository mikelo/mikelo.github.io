function stdCmp(a, b) {
    if (a < b) {
		return -1;
	} else if (a > b) {
		return 1;
	} else {
		return 0;
	}
}

QUnit.test( "double out empty", function( assert ) {
  assert.deepEqual( doubleOutSort([], stdCmp), [], "Passed!" );
});
QUnit.test( "double out one item", function( assert ) {
  assert.deepEqual( doubleOutSort([1], stdCmp), [1], "Passed!" );
});
QUnit.test( "double out two items", function( assert ) {
  assert.deepEqual( doubleOutSort([1, 2], stdCmp), [1, 2], "Passed!" );
});
QUnit.test( "double out three items", function( assert ) {
  assert.deepEqual( doubleOutSort([1, 2, 3], stdCmp), [1, 2, 3], "Passed!" );
});
QUnit.test( "double out four items", function( assert ) {
  assert.deepEqual( doubleOutSort([1, 2, 3, 4], stdCmp), [1, 2, 3, 4], "Passed!" );
});
QUnit.test( "double out four items is stable", function( assert ) {
  assert.deepEqual( doubleOutSort([4, 3, 2, 1], stdCmp), [1, 2, 4, 3], "Passed!" );
});
QUnit.test( "double out five items", function( assert ) {
  assert.deepEqual( doubleOutSort([1, 2, 3, 4, 5], stdCmp), [1, 2, 3, 4, 5], "Passed!" );
  assert.deepEqual( doubleOutSort([2, 1, 3, 4, 5], stdCmp), [1, 2, 3, 4, 5], "Passed!" );
  assert.deepEqual( doubleOutSort([2, 3, 1, 4, 5], stdCmp), [1, 2, 3, 4, 5], "Passed!" );
  assert.deepEqual( doubleOutSort([2, 3, 4, 1, 5], stdCmp), [1, 2, 3, 4, 5], "Passed!" );
  assert.deepEqual( doubleOutSort([2, 3, 4, 5, 1], stdCmp), [1, 2, 3, 4, 5], "Passed!" );
});
QUnit.test( "double out eight items", function( assert ) {
  assert.deepEqual( doubleOutSort([1, 2, 3, 4, 5, 6, 7, 8], stdCmp), [1, 2, 3, 4, 5, 6, 7, 8], "Passed!" );
});
QUnit.test( "double out nine items", function( assert ) {
  assert.deepEqual( doubleOutSort([1, 2, 3, 4, 5, 6, 7, 8, 9], stdCmp), [1, 2, 3, 4, 5, 6, 7, 8, 9], "Passed!" );
});
