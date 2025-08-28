# IPL social

## Informations personnelles

**Nom** : El Jarbi  
**Prénom** : Rami  
**Email** : rami.eljarbi@vinci.be

## URL du projet

[https://github.com/RelJarbi/email-validator](https://github.com/RelJarbi/email-validator)

## Description du projet

Ce projet inclut une fonction de validation de mot de passe développée en suivant la méthode Test Driven Development (TDD). Les règles de validation sont les suivantes :

- Le mot de passe doit contenir au moins **8 caractères**.
- Il doit inclure au moins **un caractère spécial**.
- Il doit inclure au moins **un chiffre**.
- Il ne doit **pas contenir la chaîne "IPL"** (majuscule ou minuscule).

Un pipeline CI/CD est configuré avec GitHub Actions pour automatiser les vérifications suivantes à chaque pull request vers la branche `main` :

1. Vérification du formatage du code avec **Prettier**.
2. Vérification de la qualité du code avec **ESLint**.
3. Exécution des tests unitaires avec **Jest**.

## Commandes utiles

### Lancer les tests

Pour exécuter les tests unitaires :

```bash
npm test
```