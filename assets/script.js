                                                 // Google Maps
//Displays Google Maps
let map;
let wednesburyLatLong = { lat: 52.5529, lng: -2.0221 };
const hockley = { lat: 52.49289, lng: -1.91285 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: wednesburyLatLong,
    zoom: 9,
    mapId: "76d2f6e69ab59646",
  });

  //Marker
  const marker = new google.maps.Marker({
    position: hockley,
    label: "Apple",
    map: map,
  });
}


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


