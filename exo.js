/* Exemple API avec fetch
 */

let message;

function initDOM() {
  resultsListElement.innerHTML = "";
  resultsListElement.style.display = "none";
  resetButtonElement.style.display = "none";
}

function updateDOM() {
  // on crée un élement <p> contenant le message
  const pElement = document.createElement("p");
  pElement.innerText = message;

  // imbriqué dans un élément <li>
  const liElement = document.createElement("li");
  liElement.appendChild(pElement);

  // et on insère le tout dans l'élément <ul>
  resultsListElement.appendChild(liElement);

  // on cache la liste si elle est vide, sinon on l'affiche
  if (resultsListElement.childElementCount === 0) {
    resultsListElement.style.display = "none";
    resetButtonElement.style.display = "none";
  } else {
    resultsListElement.style.display = "block";
    resetButtonElement.style.display = "block";
  }
}

// XMLHttpRequest
function fetchAPIData() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://techy-api.vercel.app/api/json");
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      // console.log(typeof xhttp.responseText); 
      // console.log(JSON.parse(xhttp.responseText));
      const result = JSON.parse(xhttp.responseText);
      console.log(result.message);
      message = result.message;
    }
  }
  xhttp.send();
}

// Fetch
// async function fetchAPIData() {
//   const response = await fetch("https://techy-api.vercel.app/api/json");
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
//   message = data.message;
// }

function getMessage() {
  fetchAPIData();
  updateDOM();
}

const resultsListElement = document.getElementById("results");

const ajaxButtonElement = document.getElementById("ajax-button");
ajaxButtonElement.addEventListener("click", getMessage);

const resetButtonElement = document.getElementById("reset-button");
resetButtonElement.addEventListener("click", initDOM);

initDOM();