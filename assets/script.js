//Displays Google Maps
let map;
let wednesburyLatLong = { lat: 52.5529, lng: -2.0221 };
const softcat = { lat: 52.482575, lng: -1.91285 };
const cisco = { lat: 51.518464, lng: -0.086249 };
const salesForce = { lat: 51.516376, lng: -0.081206 };
const sap = { lat: 51.449, lng: -0.445 };
const fti = { lat: 51.5175, lng: -0.0975 };
const sapKnutsford = { lat: 53.3031, lng: 2.3714 };
const sapBerkshire = { lat: 51.572803, lng: -0.776339 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: wednesburyLatLong,
    zoom: 8,
    mapId: "76d2f6e69ab59646",
    
  });
  const marker = new google.maps.Marker({
    position: softcat,
    // label: "softcat",
    map: map,
  });
  const marker1 = new google.maps.Marker({
    position: cisco,
    // label: "cisco",
    map: map,
  });

  const marker2 = new google.maps.Marker({
    position: salesForce,
    // label: "Salesforce",
    map: map,
  });

  const marker3 = new google.maps.Marker({
    position: sap,
    // label: "sap",
    map: map,
  });

  const marker4 = new google.maps.Marker({
    position: fti,
    // label: "fti",
    map: map,
  });

  const marker5 = new google.maps.Marker({
    position: sapKnutsford,
    // label: "Sap",
    map: map,
  });

  const marker6 = new google.maps.Marker({
    position: sapBerkshire,
    // label: "Sap",
    map: map,
  });


}


//Marker
  // function addMarker() {
  //}
 


console.log("hello");

//HTML id variables
var locationInput = document.getElementById ("location-input")
var searchButton = document.getElementById ("search-button")
var results = document.getElementById("results")


// var location = "london";
// var distance = "100";
// Salary, Job Title, Employers Name, Deadline for Application

// Make Search Test
var makeSearch = function (event) {
  event.preventDefault();
  console.log ("button clicked")
  // window.location.href="search-results.html"
  var userLocationInput = locationInput.value.trim();
  console.log(userLocationInput)

  // REED Variables
  var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
  var encodedKey = btoa(`${apiKey}:`);
  var authHeader = `Basic ${encodedKey}`;
  var keywords = "junior%20developer";
  var corsAnywhereLink = "https://radiant-stream-08604.herokuapp.com/";

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
