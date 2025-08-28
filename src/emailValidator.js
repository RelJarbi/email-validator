function emailValidator(v) {
  if (typeof v !== 'string') return false;


  const at = v.indexOf('@');
  if (at === -1) return false;


  const domain = v.slice(at + 1);
  if (!domain.includes('.')) return false;
  if (domain.endsWith('.')) return false;

  return true;
}
module.exports = emailValidator;

