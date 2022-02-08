var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
var encodedKey = btoa(`${apiKey}:`);
var authHeader = `Basic ${encodedKey}`;
//takes jobID from query string for use in new API call
var jobID = document.location.search.split("=").pop();
var corsAnywhereLink = "https://radiant-stream-08604.herokuapp.com/";
//queryURL for new API to search details of specific job, plus corsAnywhere as previous
var queryURL =
  corsAnywhereLink + "https://www.reed.co.uk/api/1.0/jobs/" + jobID;

// Fetch Request
https: fetch(queryURL, {
  headers: {
    Authorization: authHeader,
  },
})
  .then(function (res) {
    return res.json();
  })
  .then(function (job) {
    //elements creates and info rendered to page
    var resultArea = document.getElementById("description");
    resultArea.textContent = job.jobTitle;

    var locationEl = document.createElement("div");
    locationEl.textContent = "Location: " + job.locationName;
    resultArea.append(locationEl);

    var employerEl = document.createElement("div");
    employerEl.textContent = "Employer: " + job.employerName;
    resultArea.append(employerEl);

    var salaryEl = document.createElement("div");
    salaryEl.textContent =
      "Salary: £" + job.minimumSalary + "-" + job.maximumSalary;
    resultArea.append(salaryEl);

    var jobDescription = document.createElement("div");
    jobDescription.textContent = job.jobDescription;
    resultArea.append(jobDescription);

    var closingEl = document.createElement("div");
    closingEl.textContent = "Closing date: " + job.expirationDate;
    resultArea.append(closingEl);

    var applyLink = document.createElement("a");
    applyLink.setAttribute("href", job.jobUrl);
    applyLink.textContent = "Apply Here";

    resultArea.append(applyLink);
  });
