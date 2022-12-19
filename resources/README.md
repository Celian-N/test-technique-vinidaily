# Exercice technique - Vinidaily - Installation de la BDD

## Installation de MongoDB

Installer MongoDB sur votre ordinateur : [PC](https://welovedevs.com/fr/articles/mongodb-windows/) ou [Mac](https://welovedevs.com/fr/articles/mongodb-mac/)

## Lancement de MongoDB en local

Une fois MongoDB installé, il est nécessaire de le lancer localement. Pour cela, allez dans la console et tapez :

```bash
brew services start mongodb-community
```

## Ajout des données dans la base de données locale

Les données présentes dans le dossier "resources" du projet doivent être ajouté dans la base de donnée locale. Pour cela, rendez dans le dossier "resources" et tapez :

```bash
mongoimport --jsonArray --db local --collection wines --file ./wines.json
```
