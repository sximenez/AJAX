// let url = "https://api.pexels.com/v1/search?query=nature&per_page=10";
// let apiKey = "563492ad6f917000010000018efce9417dc74ec982dd31721e672f58";

// photosDiv = document.querySelector(".photos");

// // Search images
// document.querySelector("#search").addEventListener("keypress", function() {
//   let value = document.querySelector("#search").value;
//   if (value != null && value != "" && value != undefined) {
//     console.log(value);
//     let searchTerm = "https://api.pexels.com/v1/search?query="+value+"&per_page=10";
//     loadPics(searchTerm);
//   } else {
//     loadPics(url);
//   }
// });

// function loadPics(searchUrl) {
//   fetch(searchUrl, {
//     method: "GET",
//     headers: {
//       "Authorization":apiKey
//     }
//   })
//   .then(response => {
//     return response.json();
//   }).then (data => {
//     if (data && data != null && data != "" && data?.photos.length > 0) {
//       photosDiv.innerHTML = "";
//       let photo = "";
//       for (let val of data.photos) {
//         photo = photo + 
//         `<img src ="${val.src.medium}">
//         <h5>${val.alt}</h5>
//         <p>By : ${val.photographer}</p>`;
//         console.log(val);
//       }
//       photosDiv.innerHTML = photo;
//     }
//   })
// }

// loadPics(url);

// fetch("example.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     console.log(data[0].first_name, data[1].last_name);
//   })

// function getPhotos(images) {
//   images.map(function(image) {
//     return console.log(image);
//   })
// }

// fetch("https://api.pexels.com/v1/search?query=animals", {
//   headers: {
//     Authorization: "563492ad6f917000010000018efce9417dc74ec982dd31721e672f58"
//   }
// })

//   .then(function (response) {
//     return response.json();
//   })

//   .then(function (data) {
//     console.log(data.photos);
//   })

// const container = document.querySelector(".container");
// let cardTag;

// function getPhotos(images) {
//   images.map(function (image) {
//     cardTag = `<div class="card">
//     <img src=${image.src.tiny}>
//     </div>`;
//     container.innerHTML = container + cardTag;
//   })
// }

// fetch("https://api.pexels.com/v1/search?query=animals", {
//   headers: {
//     Authorization: "563492ad6f917000010000018efce9417dc74ec982dd31721e672f58"
//   }
// })

//   .then(function (response) {
//     return response.json();
//   })

//   .then(function (data) {
//     getPhotos(data.photos);
//   })

// Store all info needed for the app to run
const apikey = "563492ad6f917000010000018efe9417dc74ec982dd31721e672f58";
const input = document.getElementById("input");
const search_btn = document.getElementById(".search_btn");
const showmore_btn = document.getElementById(".showmore");

let page_num = 1;
let search_text = "";
let search = false;

// Add an event listener to store the value of the text to be searched

input.addEventListener("input", (event) => {
  event.preventDefault();
  search_text = event.target.value;
})

// Define the function

async function CuratedPhotos(page_num) {
  // Fetch data from API
  const data = await fetch(`https://api.pexels.com/v1/curated?page=${pageNum}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apikey, // Use the variable apiKey declared at the beginning
      },
    });

  const response = await data.json(); // Convert the response to JSON
  console.log(response);

  display_images(response); // Use the display images method to display images on the page 
}

// Define the displayImages function

function display_images(response) {
  // Use a forEach loop to iterate on each item
  response.photos.forEach(function (image) {
    const photo = document.createElement("div");
    photo.innerHTML = `<img src=${image.src.large}>
    <figcaption> Photo by : ${image.photographer}</figcaption>`;
    document.querySelector(".display_images").appendChild(photo);
  });
}

// Create another event listener for the search button

search_btn.addEventListener("click", function() {
  if(input.value === "") {
    alert("Please enter some text")
    return;
  }
  clear_gallery();
  search = true;
  search_photos(search_text, page_num);
})

// Create a searchPhotos function

async function search_photos(query, pageNum) {
  // Fetch data from API
  const data = await fetch(`https://api.pexels.com/v1/curated?query=${query}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apikey, // Use the variable apiKey declared at the beginning
      },
    });

  const response = await data.json(); // Convert the response to JSON
  console.log(response);

  display_images(response); // Use the display images method to display images on the page 
}

// Create clearGallery method

function clear_gallery() {
  document.querySelector(".display_images").innerHTML = "";
  page_num = 1;
}

// Event listener for showmore button

showmore_btn.addEventListener("click", function() {
  if(!search) {
    page_num++;
    CuratedPhotos(page_num);
  } else {
    if(search_text.value === "")
    return;
    page_num++;
    search_photos(search_text, page_num)
  }
})

CuratedPhotos(pageNum);

/* Source https://dev.to/nehasoni__/create-an-amazing-image-search-app-using-pexels-api-2cf */