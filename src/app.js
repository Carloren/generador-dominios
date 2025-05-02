import "bootstrap";
import "./style.css";
                                                                  // --> Comentar todos los import para probar directamente en la consola y que no de error de extensión de archivo

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ['the', 'our', 'your', 'a', 'his', 'her', 'its'];
let adjs = ['great', 'big', 'small', 'enormous', 'titanic'];
let nouns = ['jogger', 'racoon', 'dog', 'monkey', 'cat', 'horse'];

function domainGen() {

  let domains = '';

  for (let pronoun of pronouns){
    for (let adj of adjs){
      for (let noun of nouns){
        domains += 'www.' + pronoun + adj + noun + ".com\n"
      }
    }
  }

  console.log (domains)

  document.getElementById("domain").innerText = domains;          // --> Comentar esta línea para probar directamente en la consola y que no de error de extensión de archivo

  console.log("Hello Rigo from the console!");
};
document.getElementById("button").onclick = domainGen;            // --> Comentar esta línea para probar directamente en la consola y que no de error de extensión de archivo
// domainGen()                                                    // --> Descomentar esta funcion para probar directamente en la consola y que no de error de extensión de archivo