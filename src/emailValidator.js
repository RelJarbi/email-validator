function emailValidator(v) {
  if (typeof v !== 'string') return false;

  // C) aucun espace
  if (/\s/.test(v)) return false;

  // A) au moins un @
  const at = v.indexOf('@');
  if (at === -1) return false;

  // B) le domaine contient un point et ne se termine pas par un point
  const domain = v.slice(at + 1);
  if (!domain.includes('.')) return false;
  if (domain.endsWith('.')) return false;

  return true;
}
module.exports = emailValidator;
