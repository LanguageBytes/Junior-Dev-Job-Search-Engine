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
    resultArea.setAttribute("style", "color: purple");

    var locationEl = document.createElement("div");
    locationEl.textContent = "Location: " + job.locationName;
    resultArea.append(locationEl);
    locationEl.setAttribute("style", "color: purple");

    var employerEl = document.createElement("div");
    employerEl.textContent = "Employer: " + job.employerName;
    resultArea.append(employerEl);
    employerEl.setAttribute("style", "color: purple");

    var salaryEl = document.createElement("div");
    salaryEl.textContent =
      "Salary: £" + job.minimumSalary + "-" + job.maximumSalary;
    resultArea.append(salaryEl);
    salaryEl.setAttribute("style", "color: purple");

    var jobDescription = document.createElement("div");
    jobDescription.textContent = job.jobDescription;
    jobDescription.setAttribute("style", "color: black");
    resultArea.append(jobDescription);

    var closingEl = document.createElement("div");
    closingEl.textContent = "Closing date: " + job.expirationDate;
    closingEl.setAttribute("style", "color: red");
    resultArea.append(closingEl);

    var applyLink = document.createElement("a");
    applyLink.setAttribute("href", job.jobUrl);
    applyLink.setAttribute("style", "color: purple");
    applyLink.textContent = "Apply Here";

    resultArea.append(applyLink);
  });

  //Google API
  function initAutocomplete() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 52.5529, lng: -2.0221 },
      zoom: 13,
      mapTypeId: "roadmap",
    });
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
  
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
  
    let markers = [];
  
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
  
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
  
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
  
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
  
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }