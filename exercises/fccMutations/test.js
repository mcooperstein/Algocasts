const mutation = require('./index');

test('Mutation function is defined', () => {
    expect(typeof mutation).toEqual('function');
});

test('mutation(["hello", "hey"])', () => {
    expect(mutation(["hello", "hey"])).toBeFalsy();
});

test('mutation(["hello", "Hello"])', () => {
    expect(mutation(["hello", "Hello"])).toBeTruthy();
});

test('mutation(["Mary", "Army"])', () => {
    expect(mutation(["Mary", "Army"])).toBeTruthy();
});

test('mutation(["floor", "for"])', () => {
    expect(mutation(["floor", "for"])).toBeTruthy();
});

test('mutation(["hello", "neo"])', () => {
    expect(mutation(["hello", "neo"])).toBeFalsy();
});
