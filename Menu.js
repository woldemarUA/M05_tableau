'use strict';

// Import des fonctions du fichier 'generateList.js'
import {
  normal,
  reversed,
  ajouterQuinze,
  patmoF,
  enleverFormateur,
  insertToto,
  remplacerAli,
  consoleFor,
  consoleForEach,
  consoleForOf,
  consoleForIn,
  newTab,
} from './generateList.js';

// Définition du menu sous forme d'un tableau d'objets avec des titres et des actions associées
const menu = [
  {
    title: 'Tableau dans liste HTML.',
    action: normal,
  },
  {
    title: 'Tableau en sens inverse.',
    action: reversed,
  },
  {
    title: 'Ajouter 15 au début du tableau.',
    action: ajouterQuinze,
  },
  {
    title: 'Ajouter Patmo et Formateur à la fin.',
    action: patmoF,
  },
  {
    title: 'Enlever formateur et 15.',
    action: enleverFormateur,
  },
  {
    title: 'Toto en position 2.',
    action: insertToto,
  },
  {
    title: 'Remplacer Ali par Khaled.',
    action: remplacerAli,
  },
  {
    title: 'Afficher éléments et index avec boucle for et itérateur.',
    action: consoleFor,
  },
  {
    title: 'éléments.foreach(index)',
    action: consoleForEach,
  },
  {
    title: 'for (élément of éléments)',
    action: consoleForOf,
  },
  {
    title: 'boucle for in.',
    action: consoleForIn,
  },
  {
    title: 'Exercice 2 ',
    action: newTab,
  },
];

// Fonction qui génère les éléments du menu dans un élément parent
export const menuItems = (parentEl, listContainer, arr) => {
  const el = document.createElement('nav');
  el.className = 'nav flex-column m-2';

  // Parcours du tableau de menu pour créer les liens du menu
  for (const [index, item] of menu.entries()) {
    const { title, action } = item;
    const elLink = document.createElement('a');

    // Attribution des classes et des événements aux liens du menu
    elLink.className = `border-bottom ${
      index === 0 ? 'nav-link active' : 'nav-link'
    }`;
    elLink.onclick = () => action(arr, listContainer);
    elLink.href = '#';
    elLink.innerHTML = title;
    el.appendChild(elLink);
  }

  parentEl.appendChild(el);
};
