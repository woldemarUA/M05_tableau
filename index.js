'use strict';
import { getApprenants } from './requestAppr.js';
// import { generateList } from './generateList.js';
import { menuItems } from './Menu.js';

// Lecture du fichier Excel ('query.xlsx') et conversion en workbook avec XLSX
const workbook = XLSX.read(await (await fetch('query.xlsx')).arrayBuffer());

// Obtention de la liste des apprenants à partir du workbook
const apprenants = getApprenants(workbook);

// Tri des apprenants par ordre alphabétique
apprenants.sort();

// Affichage de la liste des apprenants dans la console sous forme de tableau
console.table(apprenants);

// Obtention de l'élément avec l'id 'app' dans le document HTML
const app = document.getElementById('app');

// Création d'un élément 'h4' pour le titre
const header = document.createElement('h4');
// Création d'un conteneur flex pour l'affichage des éléments
const flexBox = document.createElement('div');
flexBox.className = 'd-flex flex-row bd-highlight mb-3';

// Attribution du texte au titre
header.innerHTML = 'Gestion des tableaux ';
// Ajout du titre et du conteneur flex à l'élément 'app'
app.appendChild(header);
app.appendChild(flexBox);

// Création d'un conteneur pour la liste
const listContainer = document.createElement('div');

// Génération des éléments du menu en utilisant la fonction menuItems
menuItems(flexBox, listContainer, apprenants);

// Ajout du conteneur de la liste au conteneur flex
flexBox.appendChild(listContainer);
