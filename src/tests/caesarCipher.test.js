const caesarCipher = require('../functions/caesarCipher.js');

test("Takes a string and a shift factor and returns it with each character “shifted”", () => {
  expect(caesarCipher("abc",1)).toBe("bcd");
  expect(caesarCipher("xyz", 3)).toEqual("abc");
});