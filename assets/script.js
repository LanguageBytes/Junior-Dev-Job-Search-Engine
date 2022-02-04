console.log("hello");



// // Adzuna URL (with example search) and info for requests
// var applicationID = "2967701c";
// var apiKey = "fe89d5a2c6186ae38284bc35150dce01";
// var jobType = "";
// var location = "";

// var adzunaURL = "https://api.adzuna.com/v1/api/jobs/gb/search/?app_id=" +
// applicationID + "&app_key=" + apiKey + "&results_per_page=20&what=" + jobType +"&where=" + location + "&content-type=application/json";

// // fetch request to view array of jobs
// fetch(adzunaURL)
// .then(function (res) {
// return res.json();})
// .then(function (jobs) {
// console.log(jobs);
// });


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













































