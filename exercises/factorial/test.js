const factorial = require("./index");

test('Factorial function is defined', () => {
    expect(typeof factorial).toEqual('function');
});

test('calculates correct factorial value for 0', () => {
    expect(factorial(0)).toEqual(1);
});

test('calculates correct factorial value for 2', () => {
    expect(factorial(5)).toEqual(120);
});

test('calculates correct factorial value for 3', () => {
    expect(factorial(8)).toEqual(40320);
});

test('calculates correct factorial value for 4', () => {
    expect(factorial(4)).toEqual(24);
});

test('calculates correct factorial value for 15', () => {
    expect(factorial(19)).toEqual(121645100408832000);
});
