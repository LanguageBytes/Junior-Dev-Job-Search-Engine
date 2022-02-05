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

//for loop
//create card
//append each bit of results for list page

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
