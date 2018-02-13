const getIndexToIns = require('./index');

test('getIndexToIns function exists', () => {
    expect(getIndexToIns).toBeDefined();
});

test('getIndexToIns([10, 20, 30, 40, 50], 35) should return 3', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toEqual(3);
});

test('getIndexToIns([10, 20, 30, 40, 50], 30) should return 2', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toEqual(2);
});

test('getIndexToIns([5, 3, 20, 3], 5) should return 2', () => {
    expect(getIndexToIns([5, 3, 20, 3], 5)).toEqual(2);
});

test('getIndexToIns([3,10,5],3) should return 0', () => {
    expect(getIndexToIns([3, 10, 5], 3)).toEqual(0);
});
