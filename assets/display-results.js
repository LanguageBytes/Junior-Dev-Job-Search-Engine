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

//HTML Variables

var searchButton = document.getElementById("search-button");
var results = document.getElementById("results");
var stored = document.getElementById("history");

// Empty array for the localStorage
var cities = [];

// Get Local Storage from Previous Searches

  //Get any local Storage from previous searches
  if (localStorage.getItem("previousSearchData")) {
    cities = localStorage.getItem("previousSearchData");

    //Will add the user's history to the empty cities array above
    var userHistory = [];
    userHistory = cities.split(",");
    cities = userHistory;

    //For each city searched, keep it stored on the page under the form column as a button
    for (var i = 0; i < userHistory.length; i++) {
      var keepCity = document.createElement("button");
      keepCity.classList.add("save");
      keepCity.innerHTML = userHistory[i];
      stored.append(keepCity);
    }
  }
  function pushCity() {
    var searchedCity = document.location.search.split("=").pop();
    console.log("saved search" + searchedCity);
    var addCityArray = cities;
    addCityArray.push(searchedCity);
    //Will save it in local storage
    localStorage.setItem("previousSearchData", addCityArray);
  }

  pushCity()
  
// Redirected from Homepage Search

// Get Search from Previous Page
function getJobs() {
  // Takes the homepage search results from the querystring
  var location = document.location.search.split("=").pop();

  // Reed Variables
  var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
  var encodedKey = btoa(`${apiKey}:`);
  var authHeader = `Basic ${encodedKey}`;
  var keywords = "junior%20developer";
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
      console.log(res);
      return res.json();
    })
    .then(function (jobs) {
      console.log(jobs);
      console.log(jobs.results[0].employerName);

      // Creates cards in the HTML for each job
      for (var i = 0; i < jobs.results.length; i++) {
        var resultArea = document.getElementById("results");
        var resultCard = document.createElement("div");
        resultCard.setAttribute("id", "discardLater");
        resultCard.classList.add("card-body");
        resultArea.append(resultCard);

        var jobTypeEl = document.createElement("a");
        jobTypeEl.textContent = jobs.results[i].jobTitle;
        jobTypeEl.setAttribute("style", "color: purple");
        var jobId = jobs.results[i].jobId;
        var descriptionLink = "./description-page.html?q=" + jobId;
        jobTypeEl.setAttribute("href", descriptionLink);
        resultCard.append(jobTypeEl);

        var locationEl = document.createElement("div");
        locationEl.textContent = "Location: " + jobs.results[i].locationName;
        resultCard.append(locationEl);

        var employerEl = document.createElement("div");
        employerEl.textContent = "Employer: " + jobs.results[i].employerName;
        resultCard.append(employerEl);

        var salaryEl = document.createElement("div");
        salaryEl.textContent =
          "Salary: £" +
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

        var cardBreak = document.createElement("br");
        resultCard.append(cardBreak);
      }
    });
}

getJobs();

// Search on Page with Filters
newSearch = function (event) {
  event.preventDefault();

  //This will get rid of the previous searches by removing the 'discardLater' id added to resultCard (child of #results)
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  var previous = document.querySelector("#results");
  removeAllChildNodes(previous);

  //This process is the same as getJobs but with filters added to it and local storage added

  // Reed Variables
  var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
  var encodedKey = btoa(`${apiKey}:`);
  var authHeader = `Basic ${encodedKey}`;
  var keywords = ["junior%20developer%20", language];
  var corsAnywhereLink = "https://radiant-stream-08604.herokuapp.com/";

  //FILTERS
  var language = document.getElementById("language-input").value;
  var locationInput = document.getElementById("location-input");
  var minimumSalary = document.getElementById("minimum-salary-input").value;
  var maximumSalary = document.getElementById("maximum-salary-input").value;
  var userLocationInput = locationInput.value.trim();
  console.log(userLocationInput);

  // URL
  var queryURL =
    corsAnywhereLink +
    "https://www.reed.co.uk/api/1.0/search?keywords=" +
    keywords +
    "&locationName=" +
    userLocationInput +
    "&distanceFromLocation=" +
    20 +
    "&minimumSalary=" +
    minimumSalary +
    "&maximumSalary=" +
    maximumSalary;

  // if the user has not entered a search term
  if (!userLocationInput) {
    console.error("You need a search input value, you silly banana!");
    return;
  }

  // Fetch Request
  fetch(queryURL, {
    headers: {
      Authorization: authHeader,
      Allow: GET,
      POST,
      HEAD,
    },
  })
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (jobs) {
      console.log(jobs);
      console.log(jobs.results[0].employerName);

      //Creates the cards for each job
      for (var i = 0; i < jobs.results.length; i++) {
        var resultArea = document.getElementById("results");
        var resultCard = document.createElement("div");
        resultCard.setAttribute("id", "discardLater");
        resultCard.classList.add("card-body");
        resultArea.append(resultCard);

        //link created to take to next page for job description
        var jobTypeEl = document.createElement("a");
        jobTypeEl.textContent = jobs.results[i].jobTitle;
        jobTypeEl.setAttribute("style", "color: purple");
        var jobId = jobs.results[i].jobId;
        var descriptionLink = "./description-page.html?q=" + jobId;
        jobTypeEl.setAttribute("href", descriptionLink);
        resultCard.append(jobTypeEl);
        //link assigned only if clicked
        jobTypeEl.addEventListener("click", function () {
          document.location.assign(descriptionLink);
        });

        var locationEl = document.createElement("div");
        locationEl.textContent = "Location: " + jobs.results[i].locationName;
        resultCard.append(locationEl);

        var employerEl = document.createElement("div");
        employerEl.textContent = "Employer: " + jobs.results[i].employerName;
        resultCard.append(employerEl);

        var salaryEl = document.createElement("div");
        salaryEl.textContent =
          "Salary: £" +
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

        var cardBreak = document.createElement("br");
        resultCard.append(cardBreak);
    }
  }
    )
}

//Event listener for search button
searchButton.addEventListener("click", doSearch);
// Event listener for bookmark button
searchButton.addEventListener("click", newSearch);

