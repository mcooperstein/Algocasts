const findLongestWord = require('./index');

test('FindLongestWord function is defined', () => {
    expect(typeof findLongestWord).toEqual('function');
});

test('calculates correct value for: "the racecar goes around the racetrack"', () => {
    expect(findLongestWord("the racecar goes around the racetrack")).toEqual(9);
});

test('calculates correct value for: "eating good in the neighborhood"', () => {
    expect(findLongestWord("eating good in the neighborhood")).toEqual(12);
});

test('calculates correct value for: "whats the deal with Ovaltene"', () => {
    expect(findLongestWord("what's the deal with Ovaltene")).toEqual(8);
});

test('calculates correct value for: "my name is what"', () => {
    expect(findLongestWord("my name is what")).toEqual(4);
});
