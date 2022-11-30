// Import the data from the dataset -> json file
import json from "../tarieven.json" assert {type: "json"};


// Make a map, using Leaflet. Put given coordinates in center and zoom to given view
const map = L.map("map").setView([52.3702157, 4.8951679], 12);


// Load the map from OpenStreetMap
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Give color to each zone
function getColor(tarief) {
  switch (tarief) {
    case '7,50':
      return '#FF0000';
      break;
    case '6,00':
      return '#FF9D00';
      break;
    case '4,50':
      return '#F7E405';
      break;
    case '3,50':
      return '#6CD800';
      break;
    case '2,50':
      return '#0062FF';
      break;
    case '1,40':
      return '#BE00EB';
      break;
    default:
      return 'black';
  }
}


// Loop over dataset
const dataSet = Object.keys(json).map(key => {

  let polygonArray;

  // Determine if zone is Polygon (one array) or MultiPolygon (more arrays)
  // Put the arrays in one item
  if (json[key].location.type === 'MultiPolygon') {
    polygonArray = json[key].location.coordinates[0];
  } else if (json[key].location.type === 'Polygon') {
    polygonArray = json[key].location.coordinates;
  }

  // Make a polygon based on arrays in zone, give color: none
  return {
    zoneId: key,
    areas: polygonArray,
    tarieven: json[key].tarieven[0],
    polygons: polygonArray.map(arr => {
      return L.polygon(arr.map(item => item.reverse()), {
        color: "none"
      }).addTo(map)
    })
  }
})


// Add function to the checkboxes in index.html
window.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  // Do function(changeCheckbox) if checkbox is checked
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", changeCheckbox)
  })
})


// Function that gives polygon color when activated
function changeCheckbox(event) {
  dataSet.forEach(item => {

    if (Object.keys(item.tarieven)[0] === event.target.value) {
      item.polygons.forEach(polygon => {
        if (event.target.checked) {
          polygon.setStyle({
            color: getColor(event.target.value)
          })
        } else {
          polygon.setStyle({
            color: "none"
          })
        }
      })
    }
  })
}


// Easter egg, zoom to my current addresses
// const Amsterdam = document.querySelector("#Ams");
// Amsterdam.addEventListener("click", zoomAms);
const Limburg = document.querySelector("#Lim");
Limburg.addEventListener("click", zoomLim);
const Ams = document.querySelector("#Ams");
Ams.addEventListener("click", zoomAms);

// function zoomAms() {
//   map.setView([52.33565198160394, 4.88310030595754], 18);
// }
function zoomLim() {
  if (confirm("Je moet er wel voor naar een rustig dorpje in Limburg...") == true) {
    map.setView([51.170870781573484, 5.820799073861629], 16);
    document.getElementById("Ams").style.display="inline";
    document.getElementById("Lim").style.display="none";
}
}

function zoomAms() {
  map.setView([52.3702157, 4.8951679], 12);
  document.getElementById("Ams").style.display="none";
  document.getElementById("Lim").style.display="inline";
}


 