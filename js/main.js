
/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

// A l'envoi du formulaire
const formulaire = document.querySelector('form');
formulaire.addEventListener('submit', function(event){
    event.preventDefault(); // Annule l'envoi du formulaire
    alert('Envoyé !');
});

// Au changement de la valeur de la liste
const listeBackground = document.getElementById('background');
listeBackground.addEventListener('change', function(){
    const image = `./img/backgrounds/${listeBackground.value}`
    document.body.style.backgroundImage = `url(${image})`
});