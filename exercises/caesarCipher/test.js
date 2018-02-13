const rot13 = require('./index');

test('expect rot13 to be a function that exists', () => {
    expect(rot13).toBeDefined();
})

test('rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"', () => {
    expect(rot13("SERR PBQR PNZC")).toEqual("FREE CODE CAMP")
})

test('rot13("SERR CVMMN!") should decode to "FREE PIZZA!"', () => {
    expect(rot13("SERR CVMMN!")).toEqual("FREE PIZZA!")
})

test('rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."', () => {
    expect(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")).toEqual("THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.")
})
