var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
var encodedKey = btoa(`${apiKey}:`);
var authHeader = `Basic ${encodedKey}`;
var jobID = document.location.search.split("=").pop();
var corsAnywhereLink = "https://radiant-stream-08604.herokuapp.com/";
var queryURL =
  corsAnywhereLink + "https://www.reed.co.uk/api/1.0/jobs/" + jobID;

//languagebytes.github.io/Junior-Dev-Job-Search-Engine/description-page.html?q=45542861

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
    console.log(job);
    //       console.log(jobs.results[0].employerName);
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
    // Apply here/job link: jobs.results[i].jobUrl

    var closingEl = document.createElement("div");
    closingEl.textContent = "Closing date: " + job.expirationDate;
    resultArea.append(closingEl);

    var applyLink = document.createElement("a");
    applyLink.setAttribute("href", job.jobUrl);
    applyLink.textContent = "Apply Here";

    resultArea.append(applyLink);
  });

//event listener for clicking onto apply button/job title on prev page
//get job id
//put in query string all parameters searched for previously, plus jobID
//send to next page
//render info to page same as this one but with description and link to apply
