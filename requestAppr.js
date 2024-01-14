'use strict';
// const XLSX = require('xlsx');

// const fs = require('fs');

// const filePath = 'query.xlsx';

// return set with apprenants names

export const getApprenants = (workbook) => {
  const sheetNames = workbook.SheetNames[0];

  const sheet = workbook.Sheets[sheetNames];
  const data = XLSX.utils.sheet_to_json(sheet);

  const dataNoms = [];
  for (const entry of data) dataNoms.push(entry['Modifié par']);

  let apprenants = new Set(dataNoms);
  apprenants = sortApprenants(apprenants);

  return [...apprenants];
};

function sortApprenants(apprenants) {
  const temp = [];
  for (const appr of [...apprenants]) {
    const arr = appr.split(' ');

    [arr[0], arr[1]] = [arr[1], arr[0]];
    arr[0] = arr[0].toUpperCase();
    if (arr[0] === 'REZIKI') continue;
    temp.push(arr);
  }

  apprenants = temp;
  return apprenants;
}
