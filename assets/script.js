                                                 // Google Maps
//Displays Google Maps
let map;
let wednesburyLatLong = { lat: 52.5529, lng: -2.0221 };
const softcat = { lat: 52.482575, lng: -1.91285 };
const cisco = { lat: 51.518464, lng: -0.086249 };
const salesForce = { lat: 51.516376, lng: -0.081206 };
const sap = { lat: 51.449, lng: -0.445 };
const fti = { lat: 51.5175, lng: -0.0975 };
const sapKnutsford = { lat: 53.3031, lng: 2.3714 };
const sapBerkshire = { lat: 51.572803, lng: -0.776339 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: wednesburyLatLong,
    zoom: 8,
    mapId: "76d2f6e69ab59646",
    
  });
  const marker = new google.maps.Marker({
    position: softcat,
    // label: "softcat",
    map: map,
  });
  const marker1 = new google.maps.Marker({
    position: cisco,
    // label: "cisco",
    map: map,
  });

  const marker2 = new google.maps.Marker({
    position: salesForce,
    // label: "Salesforce",
    map: map,
  });

  const marker3 = new google.maps.Marker({
    position: sap,
    // label: "sap",
    map: map,
  });

  const marker4 = new google.maps.Marker({
    position: fti,
    // label: "fti",
    map: map,
  });

  const marker5 = new google.maps.Marker({
    position: sapKnutsford,
    // label: "Sap",
    map: map,
  });

  const marker6 = new google.maps.Marker({
    position: sapBerkshire,
    // label: "Sap",
    map: map,
  });


}

//Marker
  // function addMarker() {
  //}


// Console Test

console.log("hello");

                                             // Get Jobs

//id variables from HTML
var locationInput = document.getElementById ("location-input")
var searchButton = document.getElementById ("search-button")
var results = document.getElementById("results")

// Make a Search and Get Jobs
var makeSearch = function (event) {
  event.preventDefault();
  console.log ("button clicked")
  // window.location.href="search-results.html"
 
  // Get search input from user
  var userLocationInput = locationInput.value.trim();
  console.log(userLocationInput)

  if (!userLocationInput) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + userLocationInput;
  location.assign(queryString);

};


//Event listener for search button
searchButton.addEventListener("click", makeSearch)

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


