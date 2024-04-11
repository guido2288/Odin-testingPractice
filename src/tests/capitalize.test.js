const capitalize = require('../functions/capitalize.js');

test('takes a string and returns it with the first character capitalized', () => {
  expect(capitalize('hello world!')).toBe("Hello world!");
  expect(capitalize('hello world!')).toHaveLength(12);
});