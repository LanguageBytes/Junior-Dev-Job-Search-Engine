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

//Global Variables
var searchButton = document.getElementById("search-button");
var results = document.getElementById("results");

                                      //  Get Jobs on Previous Page Search
//   Get Search from Previous Page
function getJobs() {
  var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
  var encodedKey = btoa(`${apiKey}:`);
  var authHeader = `Basic ${encodedKey}`;
  var keywords = "junior%20developer"; 
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
      console.log (res);
      return res.json();
      
    })
    .then(function (jobs) {
      console.log(jobs);
      console.log(jobs.results[0].employerName);
      for (var i = 0; i < jobs.results.length; i++) {
        var resultArea = document.getElementById("results");
        var resultCard = document.createElement("div");
        resultCard.setAttribute("id", "discardLater")
        resultCard.classList.add("card-body");
        resultArea.append(resultCard);

        var jobTypeEl = document.createElement("a");
        jobTypeEl.textContent = jobs.results[i].jobTitle;
        jobTypeEl.setAttribute("href", "./description-page.html");
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

        var bookmarkEl = document.createElement("button");
        bookmarkEl.textContent =
          "Save";
        bookmarkEl.classList.add('bookmark')
        resultCard.append(bookmarkEl);
      
        var readMoreEl = document.createElement("button");
        readMoreEl.textContent =
          "Read Description";
        readMoreEl.classList.add('readMore')
        resultCard.append(readMoreEl);

        var cardBreak = document.createElement("br");
        resultCard.append(cardBreak);

        var cardBreak = document.createElement("br");
        resultCard.append(cardBreak);
      }
    });
}
getJobs()

                                                // Search with Filters
doSearch = function(event) {
  event.preventDefault()

  // This will get rid of the previous searches by removing the 'discardLater' id (child of #results)
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }
  var previous = document.querySelector('#results');
  removeAllChildNodes(previous);
 
  // Make Search with Filters

  var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
  var encodedKey = btoa(`${apiKey}:`);
  var authHeader = `Basic ${encodedKey}`;
  var keywords = ["junior%20developer%20", language]; 
  var language = document.getElementById("language-input").value;
  var locationInput = document.getElementById("location-input");
  var minimumSalary = document.getElementById("minimum-salary-input").value;
  var maximumSalary = document.getElementById("maximum-salary-input").value;
  var userLocationInput = locationInput.value.trim();
  console.log(userLocationInput);
  var corsAnywhereLink = "https://radiant-stream-08604.herokuapp.com/";


  if (!userLocationInput) {
    console.error("You need a search input value, you silly banana!");
    return;
  }

  var queryURL =
    corsAnywhereLink +
    "https://www.reed.co.uk/api/1.0/search?keywords=" +
    keywords +
    "&locationName=" +
    userLocationInput + 
    "&distanceFromLocation=" +
    20 + "&minimumSalary=" + minimumSalary + "&maximumSalary=" + maximumSalary;

  // Fetch Request
  fetch(queryURL, {
    headers: {
      Authorization: authHeader,
    },
  })
    .then(function (res) {
      console.log (res);
      return res.json();
      
    })
    .then(function (jobs) {
      console.log(jobs);
      console.log(jobs.results[0].employerName);


      for (var i = 0; i < jobs.results.length; i++) {
        var resultArea = document.getElementById("results");
        var resultCard = document.createElement("div");
        resultCard.setAttribute("id", "discardLater")
        resultCard.classList.add("card-body");
        resultArea.append(resultCard);

        var jobTypeEl = document.createElement("h4");
        jobTypeEl.textContent = jobs.results[i].jobTitle;
        //link here for next page if click on job title
        var jobLinkEl = document.createElement("a");
        jobLinkEl.setAttribute("src", "./description-page.html");
        jobTypeEl.append(jobLinkEl);
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

        var bookmarkEl = document.createElement("button");
        bookmarkEl.textContent =
          "Save";
        bookmarkEl.classList.add('bookmark')
        resultCard.append(bookmarkEl);
      
        var readMoreEl = document.createElement("button");
        readMoreEl.textContent =
          "Read Description";
        readMoreEl.classList.add('readMore')
        resultCard.append(readMoreEl);

        var cardBreak = document.createElement("br");
        resultCard.append(cardBreak);

        var cardBreak = document.createElement("br");
        resultCard.append(cardBreak);
      }
    });
  }

                                              // Bookmark a job

var addBookmark = function (event){
 event.preventDefault()
}


//Event listener for search button
searchButton.addEventListener("click", doSearch);
// Event listener for bookmark button 
bookmarkEl.addEventListener("click", addBookmark)


//Add event listener to save button
//Set item to local storage on click
//Get item from local storage
//Display items from local storage
