// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Valid phone number test', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  expect(functions.isPhoneNumber('858-111-7893')).toBe(true);
  expect(functions.isPhoneNumber('1')).toBe(false);
  expect(functions.isPhoneNumber('111')).toBe(false);
});

test('Valid email test', () => {
  expect(functions.isEmail('hello@gmail.com')).toBe(true);
  expect(functions.isEmail('hello@yahoo.com')).toBe(true);
  expect(functions.isEmail('hello')).toBe(false);
  expect(functions.isEmail('hello@')).toBe(false);
});

test('Password strength test', () => {
  expect(functions.isStrongPassword('A893J9')).toBe(true);
  expect(functions.isStrongPassword('KO839kds9')).toBe(true);
  expect(functions.isStrongPassword('1')).toBe(false);
  expect(functions.isStrongPassword('A')).toBe(false);
});

test('Data format test', () => {
  expect(functions.isDate('11/14/2021')).toBe(true);
  expect(functions.isDate('1/1/2020')).toBe(true);
  expect(functions.isDate('11/11/11')).toBe(false);
  expect(functions.isDate('1/1')).toBe(false);
});

test('Valid hex color test', () => {
  expect(functions.isHexColor('36D7D7')).toBe(true);
  expect(functions.isHexColor('FFFFFF')).toBe(true);
  expect(functions.isHexColor('fjhaskufw')).toBe(false);
  expect(functions.isHexColor('839*dnfwenwei')).toBe(false);
});

