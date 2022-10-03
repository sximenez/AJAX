// // 1. Initialisation de l'objet XMLHttpRequest, qu'on stocke dans la variable constante xhr 
// const xhr = new XMLHttpRequest();

// // 2. Spécification de la méthode HTTP à utiliser et l'URL via la méthode open
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");

// // 3. Fonction permettant de traiter la réponse reçue /!\ sérialisée en non objet
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     let response = JSON.parse(xhr.responseText);
//     console.log(typeof xhr.responseText, response);
//   }
// };

// // 4. Envoi de la requête

// xhr.send();

// let str = '{"message":"hello"}';
// console.log(str.message); // undefined

// let object = JSON.parse(str);
// console.log(object.message); // hello

const xhr = new XMLHttpRequest();
// On crée un élément div dans le DOM qu'on utilise pour injecter les données
let displayElement = document.getElementById("result");

xhr.open("GET", "https://api.ipify.org?format=json");
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    let response = JSON.parse(xhr.responseText);
    console.log(response.ip);
    
    // On crée une variable qui crée un élément p et qui stocke la réponse
    const pElement = document.createElement("p");
    pElement.innerText = response.ip;
    
    // On insère l'élément p dans le DOM
    displayElement.appendChild(pElement);
  }
};
xhr.send();