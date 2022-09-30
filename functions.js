// XMLHttpRequest
// let text;

function makeRequest() {
  // 1.
  const xhttp = new XMLHttpRequest();

  // 2.
  xhttp.open("GET", "https://techy-api.vercel.app/api/json");

  // 3.
  xhttp.onreadystatechange = function() {

    // 4.
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      const jsObject = JSON.parse(xhttp.responseText);
      text = jsObject.message;
    }

  }

  // 5.
  xhttp.send();
}

// Fetch
let text;

// 1.
async function makeRequest() {
  
  // 2.
  const response = await fetch("https://techy-api.vercel.app/api/json");

  // 3.
  const jsObject = await response.json();

  // 4.
  text = jsObject.message;
}