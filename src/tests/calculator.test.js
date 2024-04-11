const calc = require('../functions/calculator.js');

test("Sum two numbers", () => {
  expect(calc.add(3,8)).toBe(11);
  expect(calc.add(1000,2)).toBe(1002);
  expect(calc.add(0,0)).toBe(0);
});

test("Subtract two numbers", () => {
  expect(calc.subtract(8,3)).toBe(5);
  expect(calc.subtract(1000,2)).toBe(998);
  expect(calc.subtract(10,15)).toBe(-5);
});

test("Divide two numbers", () => {
  expect(calc.divide(10,5)).toBe(2);
  expect(calc.divide(5,1)).toBe(5);
  expect(calc.divide(100,5)).toBe(20);
});

test("Multiply two numbers", () => {
  expect(calc.multiply(10,5)).toBe(50);
  expect(calc.multiply(5,1)).toBe(5);
  expect(calc.multiply(25,5)).toBe(125);
});