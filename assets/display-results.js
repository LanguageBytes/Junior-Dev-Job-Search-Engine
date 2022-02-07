// RESULTS FOR LIST PAGE

// Job Title - jobs.results[i].jobTitle
// Salary: jobs.results[i].minimumSalary, jobs.results[i].maximumSalary
// Location: jobs.results[i].locationName
// Employer: jobs.results[i].employerName
// Application date: jobs.results[i].expirationDate

// INFO FOR JOB PAGE

// Job Title - jobs.results[i].jobTitle
// Salary: jobs.results[i].minimumSalary results[i].maximumSalary
// Location: jobs.results[i].locationName
// Employer: jobs.results[i].employerName
// Application date: jobs.results[i].expirationDate
// Date posted: jobs.results[i].date
// Job description: jobs.results[i].jobDescription
// Apply here/job link: jobs.results[i].jobUrl

//var location = document.location.search.split("=").pop();



//  HTML Script

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
  

function getJobs() {
  var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
  var encodedKey = btoa(`${apiKey}:`);
  var authHeader = `Basic ${encodedKey}`;
  var keywords = "junior%20developer";
  //var location = "york";
  var location = document.location.search.split("=").pop();
  var corsAnywhereLink = "https://radiant-stream-08604.herokuapp.com/";
  var queryURL =
    corsAnywhereLink +
    "https://www.reed.co.uk/api/1.0/search?keywords=" +
    keywords +
    "&locationName=" +
    location +
    "&distanceFromLocation=" +
    10;

  // Fetch Request
  fetch(queryURL, {
    headers: {
      Authorization: authHeader,
    },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (jobs) {
      console.log(jobs);
      console.log(jobs.results[0].employerName);
      for (var i = 0; i < jobs.results.length; i++) {
        var resultArea = document.getElementById("results");
        var resultCard = document.createElement("div");
        resultCard.classList.add("card-body");
        resultArea.append(resultCard);

        var jobTypeEl = document.createElement("h4");
        jobTypeEl.textContent = jobs.results[i].jobTitle;
        //link here for next page if click on job title
        // var jobLinkEl = document.createElement("a");
        // jobLinkEl.setAttribute("src", "result page");
        // jobTypeEl.append(jobLinkEl);
        resultCard.append(jobTypeEl);

        var locationEl = document.createElement("div");
        locationEl.textContent = "Location: " + jobs.results[i].locationName;
        resultCard.append(locationEl);

        var employerEl = document.createElement("div");
        employerEl.textContent = "Employer: " + jobs.results[i].employerName;
        resultCard.append(employerEl);

        var salaryEl = document.createElement("div");
        salaryEl.textContent =
          "Salary: " +
          jobs.results[i].minimumSalary +
          "-" +
          jobs.results[i].maximumSalary;
        resultCard.append(salaryEl);

        var closingEl = document.createElement("div");
        closingEl.textContent =
          "Closing date: " + jobs.results[i].expirationDate;
        resultCard.append(closingEl);

        var cardBreak = document.createElement("br");
        resultCard.append(cardBreak);
      }
    });
}

getJobs();


// Make Search SideBar and Filters

var locationInput = document.getElementById ("location-input")
var searchButton = document.getElementById ("search-button")
var results = document.getElementById("results")

// Search API
var makeSearch = function (event) {
  event.prevent.default()
    // This will take the user input from the query string for us to use
var userLocationInput = window.location.search.slice(3);
console.log(userLocationInput)
 
 // REED Variables
 var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
 var encodedKey = btoa(`${apiKey}:`);
 var authHeader = `Basic ${encodedKey}`;
 var keywords = ["junior%20developer", ""];
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
