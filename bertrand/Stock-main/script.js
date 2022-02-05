/**
 * GESTION DE STOCK
 */

// Création de l'objet "magasin"
let magasin = new Stock();

// Récupération du formulaire d'ajout
let formNewArticle = document.querySelector('#newArticle');

// Mise en place d'un écouteur d'évènement sur le formulaire
formNewArticle.addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération des éléments du DOM qui m'intéresse
    let alert = document.querySelector('#errorNewArticle');
    let ref = document.querySelector('#ref').value;
    let name = document.querySelector('#name').value;
    let price = document.querySelector('#price').value;

    // Passage des valeurs du formulaire afin d'ajouter un nouvel article
    let response = magasin.newArticle(ref, name, price);

    // Si la réponse est fausse...
    if (response === false) {
        // ... on retire la classe CSS "d-none" du message d'erreur
        alert.classList.remove('d-none');
    }

    console.log(magasin.getStock());
});