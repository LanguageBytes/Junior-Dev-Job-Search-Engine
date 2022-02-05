//Displays Google Maps
let map;
let wednesburyLatLong = { lat: 52.5529, lng: -2.0221 };
const hockley = { lat: 52.49289, lng: -1.91285 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: wednesburyLatLong,
    zoom: 9,
    mapId: "76d2f6e69ab59646",
  });

  //Marker
  const marker = new google.maps.Marker({
    position: hockley,
    label: "Apple",
    map: map,
  });
}

console.log("hello");

//HTML id variables

var locationInput = document.getElementById("location-input");
var searchButton = document.getElementById("search-button");
var results = document.getElementById("results");
var userLocationInput = locationInput.value.trim();
var locationInput = document.getElementById ("location-input")
var searchButton = document.getElementById ("search-button")
var results = document.getElementById("results")



// var location = "london";
// var distance = "100";
// Salary, Job Title, Employers Name, Deadline for Application

// Make Search Test
var makeSearch = function (event) {
  event.preventDefault();
  console.log("button clicked");
  // window.location.href="search-results.html"

  userLocationInput = locationInput.value.trim();

  fetch(queryURL, {
    headers: {
      Authorization: authHeader,
    },
  })
    .then(jsonResponse)
    .then(returnJobs);
};

//Event listener for search button
searchButton.addEventListener("click", makeSearch);
  var userLocationInput = locationInput.value.trim();
  console.log(userLocationInput)


  // REED Variables
  var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
  var encodedKey = btoa(`${apiKey}:`);
  var authHeader = `Basic ${encodedKey}`;
  var keywords = "junior%20developer";
  var corsAnywhereLink = "https://radiant-stream-08604.herokuapp.com/";

var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
var encodedKey = btoa(`${apiKey}:`);
var authHeader = `Basic ${encodedKey}`;
var keywords = "junior%20developer";

// Salary, Job Title, Employers Name, Deadline for Application

var corsAnywhereLink = "https://radiant-stream-08604.herokuapp.com/";

var queryURL =
  corsAnywhereLink +
  "https://www.reed.co.uk/api/1.0/search?keywords=" +
  keywords +
  "&locationName=" +
  userLocationInput +
  "&distanceFromLocation=" +
  10;

function jsonResponse(res) {
  return res.json();
}

function returnJobs(results) {
  console.log(results);
}

function getJobs() {
  var queryURL =
  corsAnywhereLink +
  "https://www.reed.co.uk/api/1.0/search?keywords=" +
  keywords + "&locationName=" + userLocationInput + "&distanceFromLocation=" + 10;

  fetch(queryURL, {
    headers: {
      Authorization: authHeader,
    },
  })
    .then(jsonResponse)
    .then(returnJobs);


    function jsonResponse(res) {
      return res.json();
    }
    
    function returnJobs(results) {
      console.log(results);
    }
};

//Event listener for search button
searchButton.addEventListener("click", makeSearch)




// Collapses Nav Bar on a smaller screen
function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("block");
}

//Sidebar - Side navigation menu on mobile/responsive mode
function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("bg-white");
  document.getElementById(collapseID).classList.toggle("m-2");
  document.getElementById(collapseID).classList.toggle("py-3");
  document.getElementById(collapseID).classList.toggle("px-6");
}
