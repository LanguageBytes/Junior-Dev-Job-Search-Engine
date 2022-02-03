console.log("hello");

// API keys/URLs
var testAPICall = ;
var adzunaURL = 'https://api.adzuna.com/v1/api/jobs/gb/search/?app_id=2967701c&app_key=fe89d5a2c6186ae38284bc35150dce01&results_per_page=20&what=javascript%20developer&content-type=application/json'
var applicationID = '2967701c'

//Create Variables and link ids, add API keys
var searchButton = ;
var jobTypeInput = ;
var locationInput = ;

// Test Fetch Request
fetch(adzunaURL)
.then(function (response) {
    if (response.ok) {
        console.log(response);
        response.json().then(function (data){
            console.log(data);

// Local Storage Get First

// API  Calls

// Set Local Storage
















// Create Event Listeners








                                                            //For HTML 

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