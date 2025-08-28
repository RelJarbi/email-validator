// src/emailValidator.js
function emailValidator(v) {
  if (typeof v !== 'string') return false;
  return v.includes('@');   // règle A seulement
}


module.exports = emailValidator;
