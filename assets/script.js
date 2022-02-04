
//Displays Google Maps
let map;
let wednesburyLatLong = {lat: 52.5529, lng: -2.0221};
const hockley = {lat: 52.49289, lng: -1.91285};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: wednesburyLatLong,
    zoom: 9,
    mapId: "76d2f6e69ab59646",
  });

  //Marker
  const marker = new google.maps.Marker({
    position: hockley,
    label: 'Apple',
    map: map
  })
}






console.log("hello");


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




