const { writeFile } = require('fs');
const { resolve } = require('path');
require('dotenv').config();

const targetPath = './src/environments/environment.prod.ts';  // Fichier à modifier

const envConfigFile = `
export const environment = {
  production: true,
  apiUrl: '${process.env.API_URL}',
  apiKey: '${process.env.API_KEY}'
};
`;

writeFile(resolve(targetPath), envConfigFile, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log(`Fichier d'environnement généré à ${targetPath}`);
  }
});
