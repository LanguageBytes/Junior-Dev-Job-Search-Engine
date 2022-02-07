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
  
                                        //   Get Search from Previous Page
function getJobs() {
  var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
  var encodedKey = btoa(`${apiKey}:`);
  var authHeader = `Basic ${encodedKey}`;
  var keywords = "junior%20developer%20"; 
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
      console.log (res);
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

window.onload = getJobs();

                                                 // Make Search with Filters

var searchButton = document.getElementById ("search-button")
var results = document.getElementById("results")

// Search Again 
var makeSearch = function (event) {
  event.preventDefault()
    // This will take the user input from the search field
    var locationInput = document.getElementById ("location-input")
    var userLocationInput = locationInput.value.trim();
    var languages = document.getElementById("language-input").value;
    var minimumSalary = document.getElementById("minimum-salary-input").value;
  
    if (!userLocationInput) {
      console.error("You need a search input value!");
      return;
    }

    // Will refresh the page and display new results
    var queryString = ["./search-results.html?q=" + userLocationInput + "&" + languages + minimumSalary];
    location.assign(queryString);
  }
  ;

var addBookmark = function (event){
 event.preventDefault()
}

//Event listener for search button
searchButton.addEventListener("click", makeSearch);

// Event listener for save button 
bookmarkEl.addEventListener("click", addBookmark)


