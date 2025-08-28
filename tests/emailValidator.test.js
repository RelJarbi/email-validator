const emailValidator = require('../src/emailValidator');


test('A: false quand pas de @', () => {
  expect(emailValidator('abc.def')).toBe(false);
});
test('A: true quand il y a un @', () => {

  expect(emailValidator('a@b.c')).toBe(true);
});


test('B: false si pas de point dans le domaine', () => {
  expect(emailValidator('a@b')).toBe(false);
});
test('B: false si le domaine finit par un point', () => {
  expect(emailValidator('a@b.')).toBe(false);
});
test('B: true si domaine a un point non final', () => {
  expect(emailValidator('a@b.c')).toBe(true);
});


test('C: false si espace avant @', () => {
  expect(emailValidator('ab c@d.ef')).toBe(false);
});
test('C: false si espace après @', () => {
  expect(emailValidator('abc@d ef')).toBe(false);
});
test('C: true sans espace', () => {
  expect(emailValidator('abc@def.com')).toBe(true);
});


test('D: false si rien avant @', () => {
  expect(emailValidator('@domain.com')).toBe(false);
});
test('D: false si rien après @', () => {
  expect(emailValidator('user@')).toBe(false);
});
test('D: true si texte des deux côtés', () => {
  expect(emailValidator('user@domain.com')).toBe(true);
});
