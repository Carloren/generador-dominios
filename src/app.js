import "bootstrap";
import "./style.css";
// --> Comentar todos los import para probar directamente en la consola y que no de error de extensión de archivo

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ['the', 'our', 'your'];
let adjs = ['great', 'big', 'small', 'titanic'];
let nouns = ['jokes', 'racom', 'dog', 'monkey', 'cat', 'horses'];
let exts = ['.com', '.es', '.net', '.org']

function domainGen() {

  let domains = '';

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let ext of exts) {
          if (noun.endsWith(ext.substring(1))) {
            domains += 'www.' + pronoun + adj + noun.substring(0, (noun.length - ext.length + 1 )) + ext + '\n' // --> aquí integramos la extensión con el nombre si este termina igual que la extensión
          } else {
            domains += 'www.' + pronoun + adj + noun + ext + '\n'
          }
        }
      }
    }
  }

  console.log(domains)

  document.getElementById("domain").innerText = domains;          // --> Comentar esta línea para probar directamente en la consola y que no de error de extensión de archivo

  console.log("Hello Rigo from the console!");
};
document.getElementById("button").onclick = domainGen;            // --> Comentar esta línea para probar directamente en la consola y que no de error de extensión de archivo
// domainGen()                                                    // --> Descomentar esta funcion para probar directamente en la consola y que no de error de extensión de archivo