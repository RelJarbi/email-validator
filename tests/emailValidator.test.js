const emailValidator = require('../src/emailValidator');

describe('A — contient au moins un @', () => {
  test('false quand pas de @', () => {
    expect(emailValidator('abc.def')).toBe(false);
  });
  test('true quand il y a un @', () => {

    expect(emailValidator('a@b.c')).toBe(true);
  });
});

describe('B — domaine a un point et pas en dernier', () => {
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

describe.skip('C — aucun espace', () => {});
describe.skip('D — texte avant et après @', () => {});
