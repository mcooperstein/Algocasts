const repeat = require('./index');

test('repeat("*", 3)', () => {
    expect(repeat("*", 3)).toEqual("***");
});

test('repeat("abc", 3)', () => {
    expect(repeat('abc', 3)).toEqual('abcabcabc');
});

test('repeat("abc", 1)', () => {
    expect(repeat('abc', 1)).toEqual('abc');
});

test('repeat("abc", -2)', () => {
    expect(repeat('abc', -2)).toEqual('');
});
