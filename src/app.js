import "bootstrap";
import "./style.css";

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
            domains += `<li class="list-group-item">www.${pronoun}${adj}${noun.substring(0, (noun.length - ext.length + 1))}${ext}</li>
            `
            console.log(`www.${pronoun}${adj}${noun.substring(0, (noun.length - ext.length + 1))}${ext}`);

          } else {
            domains += `<li class="list-group-item">www.${pronoun}${adj}${noun}${ext}</li>
            `
            console.log(`www.${pronoun}${adj}${noun}${ext}`);

          }
        }
      }
    }
  }

  document.getElementById("domain").innerHTML = domains;

};
document.getElementById("button").onclick = domainGen;