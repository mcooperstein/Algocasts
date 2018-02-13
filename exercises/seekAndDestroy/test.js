const seekAndDestroy = require('./index');

test('Seek and Destroy function exists', () => {
    expect(seekAndDestroy).toBeDefined();
});

test('destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]', () => {
    expect(seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
});

test('destroyer([2, 3, 2, 3], 2, 3) should return []', () => {
    expect(seekAndDestroy([2, 3, 2, 3], 2, 3)).toEqual([]);
});
