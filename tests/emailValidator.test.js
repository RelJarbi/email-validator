const emailValidator = require('../src/emailValidator');

describe('A — contient au moins un @', () => {
  test('false quand pas de @', () => {
    expect(emailValidator('abc.def')).toBe(false);
  });
  test('true quand il y a un @', () => {
    expect(emailValidator('a@b')).toBe(true);
  });
});

describe.skip('B — domaine a un point et pas en dernier', () => {
  test('false si pas de point dans le domaine', () => {
    expect(emailValidator('a@b')).toBe(false);
  });
  test('false si le domaine finit par un point', () => {
    expect(emailValidator('a@b.')).toBe(false);
  });
  test('true si domaine a un point non final', () => {
    expect(emailValidator('a@b.c')).toBe(true);
  });
});

describe.skip('C — aucun espace', () => {
  test('false si espace avant @', () => {
    expect(emailValidator('ab c@d.ef')).toBe(false);
  });
  test('false si espace après @', () => {
    expect(emailValidator('abc@d ef')).toBe(false);
  });
  test('true sans espace', () => {
    expect(emailValidator('abc@def.com')).toBe(true);
  });
});

describe.skip('D — texte avant et après @', () => {
  test('false si rien avant @', () => {
    expect(emailValidator('@domain.com')).toBe(false);
  });
  test('false si rien après @', () => {
    expect(emailValidator('user@')).toBe(false);
  });
  test('true si texte des deux côtés', () => {
    expect(emailValidator('user@domain.com')).toBe(true);
  });
});
