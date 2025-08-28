function emailValidator(v) {
  if (typeof v !== 'string') return false;

  // C) aucun espace
  if (/\s/.test(v)) return false;

  // A) contient au moins un @
  const firstAt = v.indexOf('@');
  if (firstAt === -1) return false;

  // D) texte avant et après @
  const lastAt = v.lastIndexOf('@');
  if (firstAt === 0) return false;                 // rien avant
  if (lastAt === v.length - 1) return false;       // rien après

  // B) domaine: au moins un point et pas en dernier (on prend le domaine après le dernier @)
  const domain = v.slice(lastAt + 1);
  if (!domain.includes('.')) return false;
  if (domain.endsWith('.')) return false;

  return true;
}
module.exports = emailValidator;
