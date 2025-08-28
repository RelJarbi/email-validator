const emailValidator = require('../src/emailValidator');

describe('A — contient au moins un @', () => {
  test('false quand pas de @', () => {
    expect(emailValidator('abc.def')).toBe(false);
  });
  test('true quand il y a un @', () => {
    expect(emailValidator('a@b')).toBe(true);
  });
});



