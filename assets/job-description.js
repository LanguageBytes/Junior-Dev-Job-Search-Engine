var apiKey = "c8be0d68-4d2d-4751-943b-da6b6d189413";
var encodedKey = btoa(`${apiKey}:`);
var authHeader = `Basic ${encodedKey}`;
//var jobID = document.location.search.split("=").pop();
var jobID = 45532464;
var corsAnywhereLink = "https://radiant-stream-08604.herokuapp.com/";
var queryURL = corsAnywhereLink + "https://www.reed.co.uk/api/1.0/search"; //+ jobID;

// Fetch Request
fetch(queryURL, {
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
    for (var i = 0; i < job.results.length; i++) {
      if (job.results[i].jobId === jobID) {
        var resultArea = document.getElementById("description");
        resultArea.textContent = job.results[i].jobTitle;

        var locationEl = document.createElement("div");
        locationEl.textContent = "Location: " + job.results[i].locationName;
        resultArea.append(locationEl);

        var employerEl = document.createElement("div");
        employerEl.textContent = "Employer: " + job.results[i].employerName;
        resultArea.append(employerEl);

        var salaryEl = document.createElement("div");
        salaryEl.textContent =
          "Salary: £" +
          job.results[i].minimumSalary +
          "-" +
          job.results[i].maximumSalary;
        resultArea.append(salaryEl);

        var jobDescription = document.createElement("div");
        jobDescription.textContent = job.results[i].jobDescription;
        resultArea.append(jobDescription);
        // Apply here/job link: jobs.results[i].jobUrl

        var closingEl = document.createElement("div");
        closingEl.textContent =
          "Closing date: " + job.results[i].expirationDate;
        resultArea.append(closingEl);

        var applyHere = document.createElement("button");
        applyHere.textContent = "Apply Here";

        var applyLink = document.createElement("a");
        applyLink.setAttribute("href", job.results[i].jobUrl);

        applyHere.append(applyLink);
        resultArea.append(applyHere);
      }
    }
  });

//event listener for clicking onto apply button/job title on prev page
//get job id
//put in query string all parameters searched for previously, plus jobID
//send to next page
//render info to page same as this one but with description and link to apply
