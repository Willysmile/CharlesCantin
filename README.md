# Projet Studi / Eval d’entrainement

Evaluation d’entrainement dans le cadre de la formation Studi DWWM


## Annexes du projet

Les annexes du projet se situent dans le répertoire «Annexes» du projet


## Live Demo

[https://cantin-charles-photographe.netlify.app](https://cantin-charles-photographe.netlify.app)

### Technologies utilisées:

- [Netlify CMS](https://www.netlifycms.org/)
- [Eleventy](https://www.11ty.dev/)
- [Alpine.js](https://github.com/alpinejs/alpine)
- [Tailwind CSS](https://tailwindcss.com/)

## Déploiement en ligne

Pour le déploiement en ligne, se référer à la documentation de l’hebergeur.

## Déploiement en local

### 1\. Clone le dépot Git

```
https://github.com/Willysmile/CharlesCantin.git
```

### 2\. Naviguer et sélectionner le répertoire

```
cd CharlesCantin
```

### 3\. Installer les dépendances

```
npm install
```

### 4\. Construire le projet pour générer la 1ère feuille de style CSS

Cette étape n’est à réaliser que lors du tout 1er lancement du projet.

```
npm run build
```

### 5\. Configurer le back-end en local

```
Dans le répertoire src/admin du projet, dans le fichier config.yaml :

Passer la valeur à : `true`

// Please run "npx netlify-cms-proxy-server" for local backend

local_backend: true
```
### 6\. Lancer le back-end en local

`npx netlify-cms-proxy-server`


### 7\. Lancer Eleventy

```
npm run start
```

## Auteur

Fabien Rabillard // Eval Studi 2022