import json from "./tarieven.json" assert {
  type: "json"
};

var map = L.map("map").setView([52.3702157, 4.8951679], 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
// const map = new mapboxgl.Map({
// container: 'map', // container ID
// // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
// style: 'mapbox://styles/mapbox/streets-v12', // style URL
// center: [-74.5, 40], // starting position [lng, lat]
// zoom: 9 // starting zoom
// });


// ----------------------------------------------------------------------------------------------------

console.log(json);

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

const dataSet = Object.keys(json).map(key => {

  let polygonArray;

  if (json[key].location.type === 'MultiPolygon') {
    polygonArray = json[key].location.coordinates[0];
  } else if (json[key].location.type === 'Polygon') {
    polygonArray = json[key].location.coordinates;
  }

  return {
    zoneId: key,
    areas: polygonArray,
    tarieven: json[key].tarieven[0],
    polygons: polygonArray.map(arr => {
      // return L.polygon(arr.map(item => item.reverse()), {color: getColor(Object.keys(json[key].tarieven[0])[0])}).addTo(map)
      return L.polygon(arr.map(item => item.reverse()), {color: "none"}).addTo(map)
    })
  }
  
})

window.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", changeCheckbox)
  })
})

function changeCheckbox(event) {
  dataSet.forEach(item => {

    if(Object.keys(item.tarieven)[0] === event.target.value) {
      item.polygons.forEach(polygon => {
        if(event.target.checked) {
          polygon.setStyle({color: getColor(event.target.value)})
        } else {
          polygon.setStyle({color: "none"})
        }
      })
    }
  })
}

console.log(dataSet);

