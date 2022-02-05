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
var locationInput = document.getElementById ("location-input")
var searchButton = document.getElementById ("search-button")
var results = document.getElementById("results")
var userLocationInput = locationInput.value.trim();

function jsonResponse(res) {
  return res.json();
}

function returnJobs(results) {
  console.log(results);
}

// Make Search Test
var makeSearch = function (event) {
  event.preventDefault();
  console.log ("button clicked")
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
searchButton.addEventListener("click", makeSearch)


//REED STUFF

var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
var encodedKey = btoa(`${apiKey}:`);
var authHeader = `Basic ${encodedKey}`;
var keywords = "junior%20developer";

// var location = "london";

// var distance = "100";

// Salary, Job Title, Employers Name, Deadline for Application

var corsAnywhereLink = "https://radiant-stream-08604.herokuapp.com/";

var queryURL =
  corsAnywhereLink +
  "https://www.reed.co.uk/api/1.0/search?keywords=" +
  keywords + "&locationName=" + userLocationInput + "&distanceFromLocation=" + 10;
// "&locationName=" +
// location +
// "&distanceFromLocation=" +
// distance;

function jsonResponse(res) {
  return res.json();
}

function returnJobs(results) {
  console.log(results);
}

function getJobs() {
  fetch(queryURL, {
    headers: {
      Authorization: authHeader,
    },
  })
    .then(jsonResponse)
    .then(returnJobs);
}




// //  Adzuna URL (with example search) and info for requests
//  var applicationID = "2967701c";
//  var apiKey = "fe89d5a2c6186ae38284bc35150dce01";
//  var jobType = "developer";
//  var location = "Birmingham";

// var adzunaURL = "https://api.adzuna.com/v1/api/jobs/gb/search/?app_id=" + applicationID + "&app_key=" + apiKey + "&results_per_page=20&what=" + jobType +"&where=" + location + "&content-type=application/json";

// // fetch request to view array of jobs
//  fetch(adzunaURL)
// .then(function (res) {
// return res.json();})
// .then(function (jobs) {
// console.log(jobs);
// });

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


//Adzuna URL (with example search) and info for requests
// var applicationID = "2967701c";
// var apiKey = "fe89d5a2c6186ae38284bc35150dce01";
// var jobType = "";
// var location = "";

// var adzunaURL =
//   "https://api.adzuna.com/v1/api/jobs/gb/search/?app_id=" +
//   applicationID +
//   "&app_key=" +
//   apiKey +
//   "&results_per_page=20&what=" +
//   jobType +
//   "&where=" +
//   location +
//   "&content-type=application/json";

//fetch request to view array of jobs
// fetch(adzunaURL)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (jobs) {
//     console.log(jobs);
//   });
