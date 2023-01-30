# MEWO React Project 2023

Informations about the server in the [readme file](/server/README.md).

Server doc available at http://localhost:3001/v1/docs/. (Default port)

# Client side

Start by creating an `.env` file in the `client` folder

Server for dev

```sh
yarn dev
```

Server for prod

```sh
yarn build
yarn preview
```

# Barème

# Project React mewo 2023 - autres applications

## Barème générale

-   Formulaire de login et/ou register fonctionnel (5 points)
    -   HTML correct (1 point)
    -   Remplissage des champs de texte fonctionnel (1 point)
    -   Url correct et possibilité de passer d'une page à une autre (1 point)
    -   Envoi de la requête login sur le serveur fonctionnel (POST /v1/auth/login) (1 point)
    -   Envoi de la requête register sur le serveur fonctionnel (POST /v1/auth/register) (1 point)
-   Page de discussions (6 points)
    -   Création d'une discussion et lister les utilisateurs disponibles (2 points)
    -   Affichage de toutes les discussions de l'utilisateur connecté (GET /v1/users/:userId/discussions) avec les champs titre et description (1 point)
    -   Adresse de la page qui change lors de la sélection de la discussion (1 point)
    -   Affichage des messages (GET /v1/discussions/:discussionId/comments) et des membres d'une discussion (GET /v1/discussions/:discussionId) (1 point)
    -   Envoi d'un message (POST /comments) (1 point)
-   Page de modification de l'utilisateur (2 points)
    -   Affichage des informations de l'utilisateur (GET /v1/users/:userId) (1 point)
    -   Modification des informations utilisataeurs (nom, email, mot de passe) (PATCH /v1/users/:userId) (1 point)
-   Contrôle d'un thème global clair/sombre (2 points)
-   Autres critères (total 5 points)
    -   Affichage de composants lorsqu'un requête et en cours et un message d'erreur lorsque l'API renvoie une erreur (1 point)
    -   CSS/style (0,5 point)
    -   Propreté du code : Choix des variables, pas de rendus inutiles, décompositions des composants, ... (1,5 point)
    -   Inscription de tous les PropTypes (0,5 point)
    -   Utilisation d'un ErrorBoundary global (0,5 point)
    -   Affichage d'une page d'erreur pour les routes non existantes (0,5 point)
    -   Persistence des données au refresh (0,5 point)
