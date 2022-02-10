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
var clearStorage = document.getElementById("clearStorage")

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

  // Will push the city to the empty array
  function pushCity() {
    var searchedCity = document.location.search.split("=").pop();
    console.log("saved search" + searchedCity);
    document.getElementById("clearStorage").style.display ="block"
    var addCityArray = cities;
    if (!addCityArray.includes(searchedCity)) {
      addCityArray.push(searchedCity);
    }
    //Will save it in local storage if not already present
    localStorage.setItem("previousSearchData", addCityArray);
  }

  pushCity();


  // From Homepage Search

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

        // Creates cards in the HTML for each job and displays the results
        for (var i = 0; i < jobs.results.length; i++) {
          var resultArea = document.getElementById("results");
          var resultCard = document.createElement("div");
          resultCard.setAttribute("id", "discardLater");
          resultCard.classList.add("card-body");
          resultArea.append(resultCard);

          // Job Name
          var jobTypeEl = document.createElement("a");
          jobTypeEl.textContent = jobs.results[i].jobTitle;
          jobTypeEl.setAttribute("style", "color: purple");
          var jobId = jobs.results[i].jobId;
          var descriptionLink = "./description-page.html?q=" + jobId;
          jobTypeEl.setAttribute("href", descriptionLink);
          resultCard.append(jobTypeEl);
          
          // Location
          var locationEl = document.createElement("div");
          locationEl.textContent = "Location: " + jobs.results[i].locationName;
          resultCard.append(locationEl);

          // Employer
          var employerEl = document.createElement("div");
          employerEl.textContent = "Employer: " + jobs.results[i].employerName;
          resultCard.append(employerEl);

          // Salary
          var salaryEl = document.createElement("div");
          salaryEl.textContent =
          "Salary:  £" +
          jobs.results[i].minimumSalary +
          "-" +
          jobs.results[i].maximumSalary;
          resultCard.append(salaryEl);
          
          // Closing Date
          var closingEl = document.createElement("div");
          closingEl.textContent =
            "Closing date: " + jobs.results[i].expirationDate;
          resultCard.append(closingEl);
           
          // Page breaks
          var cardBreak = document.createElement("br");
          resultCard.append(cardBreak);

          var cardBreak = document.createElement("br");
          resultCard.append(cardBreak);

          pushCity()
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

    //This process is the same as getJobs but with filters added to it

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
    var distanceFromLocation = document.getElementById("tickmarks").value;

   //The value of these variables will change depending on whether the box is checked
    var temp = document.getElementById("temp").checked;
    var permanent = document.getElementById("permanent").checked;
    var contract = document.getElementById("contract").checked

    //Is the box checked?
    if (temp === true) {
      temp = document.getElementById("temp").value = "true";
    }
    else {
      temp = document.getElementById("temp").value = "false";
    }
    if (permanent === true) {
      permanent = document.getElementById("permanent").value ="true";
    }
    else {
      permanent = document.getElementById("permanent").value = "false";
    }

    if (contract === true) {
      contract = document.getElementById("contract").value = "true";
    }
      else {
        contract = document.getElementById("contract").value = "false";
      }
  
      //The new value of the variables based on the process above

      temp = document.getElementById("temp").value;
      permanent = document.getElementById("permanent").value;
      contract = document.getElementById("contract").value;

    
    // Will take the user's location this time from the search input
    var userLocationInput = locationInput.value.trim();

  // Checking user's input
    console.log(userLocationInput);
    console.log("temporary? = " + temp + " permanent? = " + permanent + " contract? = " + contract)

    // Query URL with filters added
    var queryURL =
      corsAnywhereLink +
      "https://www.reed.co.uk/api/1.0/search?keywords=" +
      keywords +
      "&locationName=" +
      userLocationInput +
      "&distanceFromLocation=" +
      distanceFromLocation +
      "&minimumSalary=" +
      minimumSalary +
      "&maximumSalary=" +
      maximumSalary +
      "&temp=" +
      temp + "&contract=" +
      contract + "&permanent=" + permanent;


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
       
        // if no results found, display text in HTML
        if (jobs.totalResults === 0){
          console.log ("no results found")
          var resultArea = document.getElementById("results");
          var resultCard = document.createElement("div");
          resultCard.setAttribute("class", "align-center");
          resultCard.textContent = "Unfortunately, no results were found for your search";
          resultArea.append(resultCard);
        }

        // If results found, continue the process
        else {
        console.log (jobs.results[0].employerName);
        }

    // if the user has not entered a search term, text will display in HTML prompting the user to try again
    if (!userLocationInput) {
      console.error("You need a search input value, you silly banana!");
      var resultArea = document.getElementById("results");
          var resultCard = document.createElement("div");
          resultCard.setAttribute("class", "align-center");
          resultCard.textContent = "Enter a location to continue. If you wish to search nationally, enter 'UK' in the search field";
          resultArea.append(resultCard);
      return;
    }


    // IF SEARCH IS SUCCESSFUL

      //Creates the cards for each job and displays in HTML
      for (var i = 0; i < jobs.results.length; i++) {
        resultArea = document.getElementById("results");
        resultCard = document.createElement("div");
        resultCard.setAttribute("id", "discardLater");
        resultCard.classList.add("card-body");
        resultArea.append(resultCard);

        //link created to take to next page for job description
        var jobTypeEl = document.createElement("a");
        jobTypeEl.textContent = jobs.results[i].jobTitle;
        jobTypeEl.setAttribute("style", "color: purple");
        jobTypeEl.classList.add("margin-top")
        var jobId = jobs.results[i].jobId;
        var descriptionLink = "./description-page.html?q=" + jobId;
        jobTypeEl.setAttribute("href", descriptionLink);
        resultCard.append(jobTypeEl);
        jobTypeEl.addEventListener("click", function () {
          document.location.assign(descriptionLink);
        });

        // Location
        var locationEl = document.createElement("div");
        locationEl.textContent = "Location: " + jobs.results[i].locationName;
        resultCard.append(locationEl);

        //Employer
        var employerEl = document.createElement("div");
        employerEl.textContent = "Employer: " + jobs.results[i].employerName;
        resultCard.append(employerEl);

        // Salary
        var salaryEl = document.createElement("div");
        salaryEl.textContent = 
        "Salary: " +
          jobs.results[i].minimumSalary +
          "-" +
          jobs.results[i].maximumSalary;
        resultCard.append(salaryEl);
        
      //  Closing date
        var closingEl = document.createElement("div");
        closingEl.textContent =
          "Closing date: " + jobs.results[i].expirationDate;
        resultCard.append(closingEl);

        // Page breaks
        var cardBreak = document.createElement("br");
        resultCard.append(cardBreak);

        var cardBreak = document.createElement("br");
        resultCard.append(cardBreak);
    }
  }
    )
}


// Event Listener for when Search button is clicked
searchButton.addEventListener("click", newSearch);

// If delete button is clicked, locaL Storage will be cleared
clearLocalStorage = function (event) {
  event.preventDefault()
  localStorage.removeItem("previousSearchData");
  keepCity.classList.remove("save");
  keepCity.classList.add("unsave");
  }
  
  //Event listener for delete button
  clearStorage.addEventListener("click", clearLocalStorage)



  // Bring back the previous search function - when the user clicks on the button of city saved in history, that search will be repeated
    bringBackSearch = function (event) {
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
      var minimumSalary = document.getElementById("minimum-salary-input").value;
      var maximumSalary = document.getElementById("maximum-salary-input").value;
      var distanceFromLocation = document.getElementById("tickmarks").value;
      var temp = document.getElementById("type").value;
      var userLocationInput = keepCity.textContent;
      console.log(userLocationInput);
  
      // URL
      var queryURL =
        corsAnywhereLink +
        "https://www.reed.co.uk/api/1.0/search?keywords=" +
        keywords +
        "&locationName=" +
        userLocationInput +
        "&distanceFromLocation=" +
        distanceFromLocation +
        "&minimumSalary=" +
        minimumSalary +
        "&maximumSalary=" +
        maximumSalary +
        "&temp=" +
        temp;
  
  
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
          console.log (jobs.results[0].employerName);
  
      // if the user has not entered a search term
      if (!userLocationInput) {
        console.error("You need a search input value, you silly banana!");
        return;
      }
  
  
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
          jobTypeEl.classList.add("margin-top")
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
  
          var cardBreak = document.createElement("br");
          resultCard.append(cardBreak);
      }
    }
      )
  }

  //Event listener for bringing back search
  keepCity.addEventListener("click", bringBackSearch)



