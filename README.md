# Email Validator — BIMV2190 (DevOps)

![CI](https://github.com/RelJarbi/email-validator/actions/workflows/ci.yml/badge.svg)

## Informations personnelles
- **Nom :** El Jarbi  
- **Prénom :** Rami  
- **Email Vinci :** rami.eljarbi@vinci.be

## URL du projet
- **GitHub :** https://github.com/RelJarbi/email-validator

## Explication du code
Le projet implémente une fonction **`emailValidator`** (JavaScript) développée en **TDD**.  
Un email est considéré **valide** si :
1) il contient **au moins un `@`**,  
2) le **domaine** (après `@`) contient **au moins un point** et **ne se termine pas** par un point,  
3) l’email ne contient **aucun espace**,  
4) il y a du **texte avant** et **après** le `@`.

Les tests unitaires (Jest) se trouvent dans `tests/emailValidator.test.js`.  
La **CI GitHub Actions** (`.github/workflows/ci.yml`) exécute automatiquement `npm test` à chaque **push** et **pull request** vers `main`.

## Lancer les tests
```bash
npm test

# Node.js ≥ 18 (CI utilise Node 20)
npm install
npm test

email-validator/
├─ .github/workflows/ci.yml
├─ src/emailValidator.js
├─ tests/emailValidator.test.js
├─ .gitignore
├─ package.json
└─ README.md
