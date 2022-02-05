// RESULTS FOR LIST PAGE

// Job Title - results[i].jobTitle
// Salary: results[i].minimumSalary results[i].maximumSalary
// Location: results[i].locationName
// Employer: results[i].employerName
// Application date: results[i].expirationDate

// INFO FOR JOB PAGE

// Job Title - results[i].jobTitle
// Salary: results[i].minimumSalary results[i].maximumSalary
// Location: results[i].locationName
// Employer: results[i].employerName
// Application date: results[i].expirationDate
// Date posted: results[i].date
// Job description: results[i].jobDescription
// Apply here/job link: results[i].jobUrl

function getJobs() {
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
    userLocationInput +
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
    });

  for (var i = 0; i < results.length; i++) {
    var resultArea = document.getElementById("results");
    var resultCard = document.createElement("div");
    resultCard.classList.add("card-body");
    resultArea.append(resultCard);

    var jobTypeEl = document.createElement("h4");
    jobTypeEl.textContent = results[i].jobTitle;
    resultCard.append(jobTypeEl);
    //add href attribute here to link to further job details page

    var locationEl = document.createElement("div");
    locationEl.textContent = "Location: " + results[i].locationName;
    resultCard.append(locationEl);

    var employerEl = document.createElement("div");
    employerEl.textContent = "Employer: " + results[i].employerName;
    resultCard.append(employerEl);

    var salaryEl = document.createElement("div");
    salaryEl.textContent =
      "Salary: " + results[i].minimumSalary + "-" + results[i].maximumSalary;
    resultCard.append(salaryEl);

    var closingEl = document.createElement("div");
    closingEl.textContent = results[i].expirationDate;
    resultCard.append(expirationDate);
  }
}
