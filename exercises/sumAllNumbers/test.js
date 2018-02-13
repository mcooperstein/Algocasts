const sumAll = require('./index');

test('SumAll function exists', () => {
    expect(sumAll).toBeDefined();
});

test('sumAll([1,4]) should return 10', () => {
    expect(sumAll([1,4])).toEqual(10);
});

test('sumAll([5,10]) should return 45', () => {
    expect(sumAll([5,10])).toEqual(45);
});
