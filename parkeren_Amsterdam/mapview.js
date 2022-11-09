/* <reference path="./typings/index.d.ts" /> */
import { color } from "d3";
import json from "./tarieven.json" assert { type: "json" };


var map = L.map('map').setView([52.3702157, 4.8951679], 14);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// ---
// var latlngs = [
//     [[52.38601642804, 4.883046248532],
//     [52.385546291723, 4.8843027371309],
//     [52.385221195676, 4.8850072727968],
//     [52.38428525197, 4.8866559660499]],
//     [[52.383153965716, 4.8936136916361],
//     [52.383751044987, 4.8963837433116],
//     [52.382107426235, 4.8976786877494]]
//   ];

console.log(Object.keys(json));

// Object.keys(json).forEach(key => {
// })


    // console.log(json[key].location.coordinates[1][0]);

//     // L.polygon(json[key].location.coordinates[0].flat().map(item => item.reverse()), {color: 'black'}).addTo(map)
//     L.polygon(json['T11A'].location.coordinates[0].map(), {color: 'black'}).addTo(map);
// })

// var polygon = L.polygon(json['T11A'].location.coordinates[0].flat().map(item => item.reverse()), {color: 'black'}).addTo(map);

// ------ COMMENT DIT UIT!!!!!
var polygon = L.polygon(json['T11A'].location.coordinates[0].map(item => item.reverse()), {color: 'black'}).addTo(map);
var polygon = L.polygon(json['T11N'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
var polygon21 = L.polygon(json['T12A'].location.coordinates[0][0].map(item => item.reverse()), {color: 'blue'}).addTo(map);
var polygon22 = L.polygon(json['T12A'].location.coordinates[1][0].map(item => item.reverse()), {color: 'green'}).addTo(map);
var polygon24 = L.polygon(json['T12A'].location.coordinates[0][3].map(item => item.reverse()), {color: 'green'}).addTo(map);
var polygon25 = L.polygon(json['T12A'].location.coordinates[1][0].map(item => item.reverse()), {color: 'red'}).addTo(map);
var polygon22 = L.polygon(json['T12A'].location.coordinates[2][0].map(item => item.reverse()), {color: 'yellow'}).addTo(map);
var polygon22 = L.polygon(json['T12A'].location.coordinates[2][1].map(item => item.reverse()), {color: 'orange'}).addTo(map);
var polygon22 = L.polygon(json['T12A'].location.coordinates[2][2].map(item => item.reverse()), {color: 'orange'}).addTo(map);
var polygon22 = L.polygon(json['T12A'].location.coordinates[2][3].map(item => item.reverse()), {color: 'orange'}).addTo(map);
// -----------




// map.fitBounds(polygon.getBounds());
// ---



// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();
