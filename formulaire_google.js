const puppeteer = require('puppeteer');
const { faker } = require('@faker-js/faker');


async function selectRandomRadioButton(page, name) {
  const radioButtons = await page.$$(`input[name="${name}"][type="radio"]`);
  const randomIndex = Math.floor(Math.random() * radioButtons.length);
  await radioButtons[randomIndex].click();
  // console.log('test',randomIndex)
  return randomIndex;
}

async function selectRandomCheckbox(page, name) {
  const checkboxes = await page.$$(`input[name="${name}"][type="checkbox"]`);
  const randomIndex = Math.floor(Math.random() * Math.min(checkboxes.length, 4)); // Sélectionner l'une des quatre premières cases
  await checkboxes[randomIndex].click();
}
async function selectRandomRadioButton2(page, name) {
  const radioButtons = await page.$$(`input[name="${name}"][type="radio"]`);
  const randomIndex = Math.floor(Math.random() * (radioButtons.length - 1)) + 1; // Exclure le premier bouton
  await radioButtons[randomIndex].click();
  // console.log('ajouter index', randomIndex);
  return randomIndex;
}
async function selectRandomRadioButton3(page, name) {
  const radioButtons = await page.$$(`input[name="${name}"][type="radio"]`);
  let  randomIndex = Math.floor(Math.random() * (radioButtons.length - 1)); // Exclure le cinquième bouton
  if (randomIndex >= 4) {
    randomIndex++; // Ignorer le cinquième bouton en passant à l'index suivant
  }
  await radioButtons[randomIndex].click();
  // console.log('Random index:', randomIndex);
  return randomIndex;
}


const reponses = [
  "Les pratiques de la Gestion de la Qualité Totale amélioreront la satisfaction client en assurant des produits et services de meilleure qualité.",
  "La Gestion de la Qualité Totale conduira à une plus grande efficacité opérationnelle, ce qui se traduira par une meilleure expérience client.",
  "Les pratiques de la Gestion de la Qualité Totale permettront de mieux comprendre les besoins des clients et d'y répondre de manière plus efficace.",
  "En mettant l'accent sur la qualité à chaque étape du processus, la Gestion de la Qualité Totale renforcera la confiance des clients dans la marque.",
  "La Gestion de la Qualité Totale favorisera une culture organisationnelle axée sur l'amélioration continue, ce qui se traduira par une expérience client plus positive."
];
const reponses2 = [
  "J'aimerais voir une amélioration de la fiabilité des produits et services pour une expérience utilisateur plus constante.",
  "Une meilleure communication entre l'entreprise et les clients pour comprendre et répondre plus efficacement à leurs besoins.",
  "Des efforts accrus pour réduire les délais de livraison et améliorer la ponctualité des services.",
  "Plus d'accent mis sur la personnalisation des produits et services pour répondre aux besoins spécifiques de chaque client.",
  "Une attention accrue portée à la durabilité et à l'impact environnemental des produits et services proposés."
];
const reponses3 = [
  "La Gestion de la Qualité Totale devrait mettre l'accent sur l'écoute des besoins des consommateurs pour améliorer continuellement les produits et services.",
  "Il serait bénéfique que les entreprises mettent en place des mécanismes de rétroaction des clients pour comprendre leurs expériences et leurs attentes.",
  "La transparence dans les processus de fabrication et la communication ouverte avec les consommateurs peuvent renforcer la confiance dans les produits et services.",
  "Les entreprises devraient adopter une approche proactive en matière de résolution des problèmes et de satisfaction des clients pour garantir leur fidélité.",
  "L'intégration de la Gestion de la Qualité Totale dans la culture d'entreprise peut contribuer à améliorer la perception des consommateurs et à fidéliser la clientèle."
];

async function remplirGoogleForme() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://forms.office.com/pages/responsepage.aspx?id=TWbW27lO60aZ2FxDuhU8YZALNof4NEJPmzTJveDXmHBUNTRDQUE1TDdLWDVOOUZSMjRPTEZQMEFCWS4u');

  // Remplir le formulaire et soumettre
  for (let i = 0; i < 1000; i++) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Attendre une seconde
    
// await selectRandomRadioButton(page, 'r290fc1e8892e4ca2871fef69bd148f92');
const randomIndex = await selectRandomRadioButton(page, 'r290fc1e8892e4ca2871fef69bd148f92');
let randomIndex2;
if (randomIndex === 0) {
  randomIndex2 = await page.click('input[value="High School or Equivalent"]');
    await page.click('input[value="Student"]');
} else {
  randomIndex2 = await selectRandomRadioButton2(page, 'r63a50aa3b14d462dbc92f11c0e6077ab');
   
}
if (randomIndex2>0){
  await selectRandomRadioButton3(page, 'r86b6a025b4564576b3ccb435d2ffc9d3');
}else {
  await selectRandomRadioButton(page, 'r86b6a025b4564576b3ccb435d2ffc9d3');
}
//await page.click('input[value="Under 25"]');
// await selectRandomRadioButton(page, 'r63a50aa3b14d462dbc92f11c0e6077ab');
// await selectRandomRadioButton(page, 'r86b6a025b4564576b3ccb435d2ffc9d3');
await selectRandomRadioButton(page, 'r39d8daf9f5734c63b4007dca75468ed3');
await selectRandomRadioButton(page, 'r2b3f904015d54a51bef6feff034cfa20');
await selectRandomRadioButton(page, 'r9bc0babd24704b07ad68ab49d7e685d6');
await selectRandomRadioButton(page, 'rf765870f752045c182304a7455b37985');
await selectRandomRadioButton(page, 'r0882dc362046483eb66b08e2625b2c63');
 await selectRandomRadioButton(page, 'rc0bfe27cf9284713b39eaf29487a8847');
 await selectRandomCheckbox(page, 'rfc54bf9a79a74da085e92aaa57626f5d');
await selectRandomRadioButton(page, 'r630faa99546a4534a32eaaac9411376c');
await selectRandomRadioButton(page, 'rf27e087755314e4eb8addae60b2a53bc');
await selectRandomRadioButton(page, 'r9b707f1f616c49f3a65c3552bcef3f8d');
await selectRandomRadioButton(page, 'r9ebfd0da22bd43eeb5b34381ee3bb7c4');

// await page.click('#question-list > div:nth-child(16) > div.-bR-48 > div > div > div:nth-child(1) > div > div');
const randomIndexchild = Math.floor(Math.random() * 10) + 1;
await page.click(`#question-list > div:nth-child(16) > div.-bR-48 > div > div > div:nth-child(${randomIndexchild}) > div > div`);

await selectRandomRadioButton(page, 'rc9e610f1c5234017bebe0631c8f78301');
// Sélectionner l'élément input
const reponseAleatoire = reponses[Math.floor(Math.random() * reponses.length)];
const reponseAleatoire2 = reponses2[Math.floor(Math.random() * reponses.length)];
const reponseAleatoire3 = reponses3[Math.floor(Math.random() * reponses.length)];
const inputElement = await page.$('input[aria-labelledby="QuestionId_r9fd232030d1d45d88e8fa125064e3527 QuestionInfo_r9fd232030d1d45d88e8fa125064e3527"]');
const inputElement1 = await page.$('input[aria-labelledby="QuestionId_r13c3aff0a6cb4583999f20ca5a95c4fa QuestionInfo_r13c3aff0a6cb4583999f20ca5a95c4fa"]');
const inputElement2 = await page.$('input[aria-labelledby="QuestionId_rb3373ab53c2b44f2b383b028a3931529 QuestionInfo_rb3373ab53c2b44f2b383b028a3931529"]');
// Saisir le mot dans l'input
await inputElement.type(reponseAleatoire);
await inputElement1.type(reponseAleatoire2);
await inputElement2.type(reponseAleatoire3);


    
     await page.click('button[data-automation-id="submitButton"]');
      await new Promise(resolve => setTimeout(resolve, 2000)); // Attendre une seconde
      await page.reload();
console.log('rep',i)
     await page.waitForNavigation(); // Attendre la navigation suivante
   }

   await browser.close();
}

remplirGoogleForme();
