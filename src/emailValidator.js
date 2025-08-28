

function emailValidator(v) {
  if (typeof v !== 'string') return false;
  return v.includes('@');
}
module.exports = emailValidator;


