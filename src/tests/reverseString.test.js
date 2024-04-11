const reverseString = require('../functions/reverseString.js');

  test('takes a string and returns it reversed', () => {
    expect(reverseString('Hello World!')).toBe("!dlroW olleH");
    expect(reverseString('Hello World!')).toHaveLength(12);
  });

