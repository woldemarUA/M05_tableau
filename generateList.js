'use strict';

// Fonction qui génère une liste à partir de données et l'ajoute à un élément parent
const generateList = (data, parentEl) => {
  parentEl.innerHTML = '';
  const el = document.createElement('ol');
  el.className = 'list-group';

  // Parcours des données pour créer des éléments de liste
  for (const item of data) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `${item[0]}, ${item[1]}`;
    el.appendChild(listItem);
  }
  parentEl.appendChild(el);
  //   return el;
};

// Fonction qui formate un tableau et l'affiche dans une liste
export const normal = (arr, parentEl) => {
  arr = formateur(arr, 'BLAGNAC'); // Formate le tableau
  generateList(arr, parentEl);
};

// Fonction qui inverse un tableau et l'affiche dans une liste
export const reversed = (arr, parentEl) => {
  arr = formateur(arr, 'BLAGNAC'); // Formate le tableau

  const revers = [];
  for (let i = arr.length - 1; i >= 0; i--) revers.push(arr[i]);
  //   generateList(arr.reverse(), parentEl);
  generateList(revers, parentEl);
  //   return revers;
};

// Fonction qui ajoute une entête et affiche un tableau dans une liste
export const ajouterQuinze = (arr, parentEl) => {
  arr = formateur(arr, 'BLAGNAC'); // Formate le tableau
  parentEl.innerHTML = '';
  const text = arr.length;

  const container = addHeader(text, parentEl);
  generateList(arr, container);
};

// Fonction qui ajoute une entête à un élément parent
function addHeader(text, parentEl) {
  const header = document.createElement('h5');
  header.className = 'h5';
  header.innerHTML = text;
  parentEl.appendChild(header);
  const container = document.createElement('div');
  parentEl.appendChild(container);

  return container;
}

// Fonction qui manipule un tableau en déplaçant un élément à une position spécifiée
export function patmoF(arr, parentEl) {
  parentEl.innerHTML = '';
  const position = arguments[2] || -1;
  const index = findPlace(arr, 'BLAGNAC');
  const atmo = ['ATMO', 'Patmo'];

  const response = [
    ...arr.slice(0, index),
    ...arr.slice(index + 1),
    ...arr.slice(index, index + 1),
    atmo,
  ];

  const container = addHeader(response.length, parentEl);

  generateList(response, container);
}

// Fonction qui insère 'TOTO' à une position spécifiée dans un tableau
export function insertToto(arr, parentEl) {
  const index = findPlace(arr, 'BLAGNAC');

  const resp = [...arr];
  resp.splice(index, 1);
  resp.splice(1, 0, ['TOTO', 'toto']);

  generateList(resp, parentEl);
}

// Fonction qui filtre un tableau en retirant les éléments correspondant à une valeur spécifiée
function formateur(arr, filter) {
  return (arr = arr.filter((word) => word[0] !== filter));
}

// Fonction qui trouve la position d'un élément dans un tableau
function findPlace(arr, searchItem) {
  let index;
  for (const [i, entry] of arr.entries()) {
    if (entry.includes(searchItem)) index = i;
  }
  return index;
}

// Fonction qui retire les éléments correspondant à une valeur spécifiée et affiche le résultat
export const enleverFormateur = (arr, parentEl) => {
  arr = formateur(arr, 'BLAGNAC');
  const atmo = ['ATMO', 'Patmo'];
  generateList([...arr, atmo], parentEl);
};

// Fonction qui remplace un élément par un autre dans un tableau
export const remplacerAli = (arr, parentEl) => {
  arr = formateur(arr, 'BLAGNAC');
  const indexAli = findPlace(arr, 'Ali');
  const indexKhaled = findPlace(arr, 'Khaled');
  const replaced = [...arr];
  replaced.splice(indexAli, 1, arr[indexKhaled]);
  replaced.splice(indexKhaled, 1);

  generateList(replaced, parentEl);
};

// Fonction qui utilise une boucle for pour afficher le contenu d'un tableau dans la console
export const consoleFor = (arr, parentEl) => {
  // Effacer le contenu de l'élément parent
  parentEl.innerHTML = '';

  // Appliquer une transformation à 'arr' avec la fonction 'formateur'
  arr = formateur(arr, 'BLAGNAC');

  // Afficher chaque élément du tableau avec console.log
  for (const [i, entry] of arr.entries()) {
    console.log(`Index ${i}, élément du tableau ${entry}`);
  }

  // Afficher un message dans l'élément parent
  parentEl.innerHTML = '<h5>Regardez la console de votre navigateur</h5>';

  // Créer un élément pre
  const codeElement = document.createElement('pre');

  // Définir le contenu texte de l'élément pre avec le code
  codeElement.textContent = `for (const [i, entry] of arr.entries())\nconsole.log(\`Index \${i}, élément du tableau \${entry}\`)`;

  // Ajouter l'élément pre à l'élément parent
  parentEl.appendChild(codeElement);
};

// Fonction qui utilise forEach pour afficher le contenu d'un tableau dans la console
export const consoleForEach = (arr, parentEl) => {
  // Effacer le contenu de l'élément parent
  parentEl.innerHTML = '';

  // Appliquer une transformation à 'arr' avec la fonction 'formateur'
  arr = formateur(arr, 'BLAGNAC');

  // Afficher chaque élément du tableau avec console.log
  arr.forEach((i, entry) =>
    console.log(`Index ${i}, élément du tableau ${entry}`)
  );

  // Afficher un message dans l'élément parent
  parentEl.innerHTML = '<h5>Regardez la console de votre navigateur</h5>';

  // Créer un élément pre
  const codeElement = document.createElement('pre');

  // Définir le contenu texte de l'élément pre avec le code
  codeElement.textContent = `arr.forEach((i, entry) =>
  console.log(\`Index \${i}, élément du tableau \${entry}\`)
);`;

  // Ajouter l'élément pre à l'élément parent
  parentEl.appendChild(codeElement);
};

// Fonction qui utilise for...of pour afficher le contenu d'un tableau dans la console
export const consoleForOf = (arr, parentEl) => {
  // Effacer le contenu de l'élément parent
  parentEl.innerHTML = '';

  // Appliquer une transformation à 'arr' avec la fonction 'formateur'
  arr = formateur(arr, 'BLAGNAC');

  // Afficher chaque élément du tableau avec console.log en utilisant for...of
  for (const [i, entry] of arr.entries()) {
    console.log(`Index ${i}, élément du tableau ${entry}`);
  }

  // Afficher un message dans l'élément parent
  parentEl.innerHTML = '<h5>Regardez la console de votre navigateur</h5>';

  // Créer un élément pre
  const codeElement = document.createElement('pre');

  // Définir le contenu texte de l'élément pre avec le code
  codeElement.textContent = `for (const [i, entry] of arr.entries()) {
  console.log(\`Index \${i}, élément du tableau \${entry}\`);
}`;

  // Ajouter l'élément pre à l'élément parent
  parentEl.appendChild(codeElement);
};

// Fonction qui utilise for...in pour afficher le contenu d'un tableau dans la console
export const consoleForIn = (arr, parentEl) => {
  // Effacer le contenu de l'élément parent
  parentEl.innerHTML = '';

  // Appliquer une transformation à 'arr' avec la fonction 'formateur'
  arr = formateur(arr, 'BLAGNAC');

  // Afficher chaque élément du tableau avec console.log en utilisant for...in
  for (const i in arr) {
    console.log(`Index ${i}, élément du tableau ${arr[i]}`);
  }

  // Afficher un message dans l'élément parent
  parentEl.innerHTML = '<h5>Regardez la console de votre navigateur</h5>';

  // Créer un élément pre
  const codeElement = document.createElement('pre');

  // Définir le contenu texte de l'élément pre avec le code
  codeElement.textContent = `for (const i in arr) {
  console.log(\`Index \${i}, élément du tableau \${arr[i]}\`);
}`;

  // Ajouter l'élément pre à l'élément parent
  parentEl.appendChild(codeElement);
};

// Fonction qui effectue diverses opérations sur un tableau et affiche le résultat
export const newTab = (arr, parentEl) => {
  arr = formateur(arr, 'BLAGNAC');
  const newTab = [];

  // Création d'un nouveau tableau d'objets avec le prénom et le nom des stagiaires
  for (let entry of arr) {
    newTab.push({
      nom: entry[0],
      prenom: entry[1],
    });
  }

  console.log(`new tab: `, newTab);

  // Création d'un nouveau tableau qui affiche ensemble le prénom et le nom
  const fullNameTab = newTab.map((entry) => {
    return `${entry.nom} ${entry.prenom}`;
  });

  console.log(`new tab: ${fullNameTab}`);

  // Filtrage du tableau pour afficher uniquement les prénoms qui contiennent 4 lettres
  newTab.filter((entry) => {
    if (entry.nom.length === 4) console.log(entry);
  });

  // Afficher un message dans l'élément parent
  const heading = document.createElement('h5');
  heading.innerHTML = 'Regardez la console de votre navigateur';
  const block1 = document.createElement('p');
  block1.innerHTML = `Créez un nouveau tableau newTab d'objets avec le prénom et le nom des stagiaires. let newTab = [{...},{...},{..}]. `;
  const block2 = document.createElement('p');
  block2.innerHTML = ` Créez un nouveau tableau simple fullNameTab qui affichera ensemble le prénom et le nom ensemble séparés par un espace, en utilisant la méthode map(). `;
  const block3 = document.createElement('p');
  block3.innerHTML = `A partir de newTab (le premier tableau d'objets), afficher uniquement les prénoms qui contiennent 4 lettres, en utilisant la méthode filter() sélectionné. `;
  // Effacez le contenu de l'élément parent
  parentEl.innerHTML = '';

  // Affichez le code dans un élément <pre>
  const codeElement = document.createElement('pre');
  codeElement.textContent = `const newTab = [];
for (let entry of arr) {
  newTab.push({
    nom: entry[0],
    prenom: entry[1],
  });
}`;

  const codeElement2 = document.createElement('pre');
  codeElement2.textContent = `const fullNameTab = newTab.map((entry) => {
    return \`\${entry.nom} \${entry.prenom}\`;
  });`;

  // Affichez le code dans un élément <pre>
  const codeElement3 = document.createElement('pre');
  codeElement3.textContent = `newTab.filter((entry) => {
  if (entry.nom.length === 4) console.log(entry);
});`;
  block1.className = block2.className = block3.className = 'fst-italic';
  // Ajoutez l'élément de code à l'élément parent
  parentEl.appendChild(heading);
  parentEl.appendChild(block1);
  parentEl.appendChild(codeElement);
  parentEl.appendChild(block2);
  parentEl.appendChild(codeElement2);
  parentEl.appendChild(block3);
  parentEl.appendChild(codeElement3);
};
