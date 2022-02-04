console.log("hello");


// Collapses Nav Bar on a smaller screen
function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("block");
  }
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
var applicationID = "2967701c";
var apiKey = "fe89d5a2c6186ae38284bc35150dce01";
var jobType = "";
var location = "";

var adzunaURL =
  "https://api.adzuna.com/v1/api/jobs/gb/search/?app_id=" +
  applicationID +
  "&app_key=" +
  apiKey +
  "&results_per_page=20&what=" +
  jobType +
  "&where=" +
  location +
  "&content-type=application/json";

  //fetch request to view array of jobs
fetch(adzunaURL)
.then(function (res) {
  return res.json();
})
.then(function (jobs) {
  console.log(jobs);
});















































console.log("hello");


                                                            //For Design HTML 

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


                                                             //API Calls

//Create Variables and link ids, add API keys
var searchButton = document.getElementById("results");
var jobTypeInput =  document.getElementById("job-type-input");
var locationInput = document.getElementById("location-input");

// API keys/URLs
var reedAPIKey = 'c8be0d68-4d2d-4751-943b-da6b6d189413';
var googleMapsAPIKey = 'AIzaSyD0UoxRvZCkYoWhjeRc2HpUoLoN6zeLNQI' ;
var testAPICall = ""
var adzunaURL = 'https://api.adzuna.com/v1/api/jobs/gb/search/?app_id=2967701c&app_key=fe89d5a2c6186ae38284bc35150dce01&results_per_page=20&what=javascript%20developer&content-type=application/json'
var applicationID = '2967701c'

// Test Fetch Request
fetch(adzunaURL)
.then(function (response) {
    if (response.ok) {
        console.log(response);
        response.json().then(function (data){
            console.log(data);
        }
    
// Local Storage Get First

// API  Calls

// Set Local Storage

// Create Event Listeners

