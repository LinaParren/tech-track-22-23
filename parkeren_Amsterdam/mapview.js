/* <reference path="./typings/index.d.ts" /> */
// import { color } from "d3";
import json from "./tarieven.json" assert { type: "json" };
// import "./scripts/test.js"



var map = L.map('map').setView([52.3702157, 4.8951679], 12);


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
var polygon11 = L.polygon(json['T11N'].location.coordinates[0].map(item => item.reverse()), {color: 'red'}).addTo(map);
var polygon12 = L.polygon(json['T11A'].location.coordinates[0].map(item => item.reverse()), {color: 'red'}).addTo(map);
var polygon21 = L.polygon(json['T12A'].location.coordinates[0].map(item => item.reverse()), {color: 'orange'}).addTo(map);
var polygon22 = L.polygon(json['T12B'].location.coordinates[0].map(item => item.reverse()), {color: 'orange'}).addTo(map);
var polygon23 = L.polygon(json['T12C'].location.coordinates[0].map(item => item.reverse()), {color: 'orange'}).addTo(map);
var polygon24 = L.polygon(json['T12D'].location.coordinates[0].map(item => item.reverse()), {color: 'orange'}).addTo(map);
var polygon31 = L.polygon(json['T13A'].location.coordinates[0].map(item => item.reverse()), {color: 'yellow'}).addTo(map);
var polygon32 = L.polygon(json['T13B'].location.coordinates[0][0].map(item => item.reverse()), {color: 'yellow'}).addTo(map);
var polygon33 = L.polygon(json['T13C'].location.coordinates[0].map(item => item.reverse()), {color: 'yellow'}).addTo(map);
var polygon34 = L.polygon(json['T13D'].location.coordinates[0][0].map(item => item.reverse()), {color: 'yellow'}).addTo(map);
var polygon35 = L.polygon(json['T13G'].location.coordinates[0][0].map(item => item.reverse()), {color: 'yellow'}).addTo(map);
var polygon41 = L.polygon(json['T14B'].location.coordinates[0].map(item => item.reverse()), {color: 'green'}).addTo(map);
var polygon42 = L.polygon(json['T14C'].location.coordinates[0][0].map(item => item.reverse()), {color: 'green'}).addTo(map);
var polygon43 = L.polygon(json['T14E'].location.coordinates[0][0].map(item => item.reverse()), {color: 'green'}).addTo(map);
var polygon44 = L.polygon(json['T14G'].location.coordinates[0].map(item => item.reverse()), {color: 'green'}).addTo(map);
var polygon51 = L.polygon(json['T16A'].location.coordinates[0].map(item => item.reverse()), {color: 'blue'}).addTo(map);
var polygon52 = L.polygon(json['T16B'].location.coordinates[0].map(item => item.reverse()), {color: 'blue'}).addTo(map);
var polygon53 = L.polygon(json['T16C'].location.coordinates[0].map(item => item.reverse()), {color: 'blue'}).addTo(map);
var polygon54 = L.polygon(json['T16D'].location.coordinates[0].map(item => item.reverse()), {color: 'blue'}).addTo(map);
var polygon61 = L.polygon(json['T17A'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map);
var polygon62 = L.polygon(json['T17C'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map);
var polygon63 = L.polygon(json['T17D'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map);
var polygon64 = L.polygon(json['T17E'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map);
var polygon65 = L.polygon(json['T17F'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map);
var polygon71 = L.polygon(json['T13B_U21'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
var polygon72 = L.polygon(json['T13B_U22'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
var polygon73 = L.polygon(json['T14B_U21'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
var polygon74 = L.polygon(json['T14B_U22'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
var polygon75 = L.polygon(json['T14B_U23'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
var polygon76 = L.polygon(json['T14B_U25'].location.coordinates[0][0].map(item => item.reverse()), {color: 'brown'}).addTo(map);

// Verdeling prijzen en zones:
// 1 7,50 -> T11N + T11A
// 2 6,00 -> T12A, T12B, T12C, T12D
// 3 4,50 -> T13A, T13B, T13C, T13D, T13G
// 4 3,50 -> T14B, T14C, T14E, T14G
// 5 2,50 -> T16A, T16B, T16C, T16D
// 6 1,40 -> T17A, T17C, T17D, T17E, T17F
// 7 0,10 -> T13B_U21, T13B_U22, T14B_U21, T14B_U22, T14B_U23, T14B_U25
// -----------


// -----------
// var polygon1 = L.polygon(json['T11A'].location.coordinates[0].map(item => item.reverse()), {color: 'black'}).addTo(map);
// var polygon2 = L.polygon(json['T11N'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
// var polygon21 = L.polygon(json['T12A'].location.coordinates[0][0].map(item => item.reverse()), {color: 'blue'}).addTo(map);
// var polygon22 = L.polygon(json['T12A'].location.coordinates[0][1].map(item => item.reverse()), {color: 'blue'}).addTo(map);
// var polygon23 = L.polygon(json['T12A'].location.coordinates[0][2].map(item => item.reverse()), {color: 'blue'}).addTo(map);
// var polygon24 = L.polygon(json['T12A'].location.coordinates[0][3].map(item => item.reverse()), {color: 'blue'}).addTo(map);
// var polygon25 = L.polygon(json['T12A'].location.coordinates[1][0].map(item => item.reverse()), {color: 'yellow'}).addTo(map);
// var polygon26 = L.polygon(json['T12A'].location.coordinates[2][0].map(item => item.reverse()), {color: 'red'}).addTo(map);
// var polygon27 = L.polygon(json['T12A'].location.coordinates[2][1].map(item => item.reverse()), {color: 'red'}).addTo(map);
// var polygon28 = L.polygon(json['T12A'].location.coordinates[2][2].map(item => item.reverse()), {color: 'red'}).addTo(map);
// var polygon29 = L.polygon(json['T12A'].location.coordinates[2][3].map(item => item.reverse()), {color: 'red'}).addTo(map);
// var polygon30 = L.polygon(json['T12A'].location.coordinates[3][0].map(item => item.reverse()), {color: 'orange'}).addTo(map);
// var polygon31 = L.polygon(json['T12A'].location.coordinates[4][0].map(item => item.reverse()), {color: 'pink'}).addTo(map);
// var polygon32 = L.polygon(json['T12A'].location.coordinates[5][0].map(item => item.reverse()), {color: 'purple'}).addTo(map);
// var polygon33 = L.polygon(json['T12A'].location.coordinates[6][0].map(item => item.reverse()), {color: 'grey'}).addTo(map);
// var polygon34 = L.polygon(json['T12A'].location.coordinates[7][0].map(item => item.reverse()), {color: 'gold'}).addTo(map);
// var polygon35 = L.polygon(json['T12A'].location.coordinates[8][0].map(item => item.reverse()), {color: 'white'}).addTo(map);
// var polygon36 = L.polygon(json['T12A'].location.coordinates[9][0].map(item => item.reverse()), {color: 'aqua'}).addTo(map);
// // -----------



// -----------
// var polygon11 = [
//     L.polygon(json['T11N'].location.coordinates[0].map(item => item.reverse()), {color: 'red'}).addTo(map),
//     L.polygon(json['T11A'].location.coordinates[0].map(item => item.reverse()), {color: 'red'}).addTo(map)]
// var polygon21 = [
//     L.polygon(json['T12A'].location.coordinates[0].map(item => item.reverse()), {color: 'orange'}).addTo(map),
//     L.polygon(json['T12B'].location.coordinates[0].map(item => item.reverse()), {color: 'orange'}).addTo(map),
//     L.polygon(json['T12C'].location.coordinates[0].map(item => item.reverse()), {color: 'orange'}).addTo(map),
//     L.polygon(json['T12D'].location.coordinates[0].map(item => item.reverse()), {color: 'orange'}).addTo(map)]
// var polygon31 = [
//     L.polygon(json['T13A'].location.coordinates[0].map(item => item.reverse()), {color: 'yellow'}).addTo(map),
//     L.polygon(json['T13B'].location.coordinates[0].map(item => item.reverse()), {color: 'yellow'}).addTo(map),
//     L.polygon(json['T13C'].location.coordinates[0].map(item => item.reverse()), {color: 'yellow'}).addTo(map),
//     L.polygon(json['T13D'].location.coordinates[0].map(item => item.reverse()), {color: 'yellow'}).addTo(map),
//     L.polygon(json['T13G'].location.coordinates[0].map(item => item.reverse()), {color: 'yellow'}).addTo(map)]
// var polygon41 = [
//     L.polygon(json['T14B'].location.coordinates[0].map(item => item.reverse()), {color: 'green'}).addTo(map),
//     L.polygon(json['T14C'].location.coordinates[0].map(item => item.reverse()), {color: 'green'}).addTo(map),
//     L.polygon(json['T14E'].location.coordinates[0].map(item => item.reverse()), {color: 'green'}).addTo(map),
//     L.polygon(json['T14G'].location.coordinates[0].map(item => item.reverse()), {color: 'green'}).addTo(map)]
// var polygon51 = [
//     L.polygon(json['T16A'].location.coordinates[0].map(item => item.reverse()), {color: 'blue'}).addTo(map),
//     L.polygon(json['T16B'].location.coordinates[0].map(item => item.reverse()), {color: 'blue'}).addTo(map),
//     L.polygon(json['T16C'].location.coordinates[0].map(item => item.reverse()), {color: 'blue'}).addTo(map),
//     L.polygon(json['T16D'].location.coordinates[0].map(item => item.reverse()), {color: 'blue'}).addTo(map)]
// var polygon61 = [
//     L.polygon(json['T17A'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map),
//     L.polygon(json['T17C'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map),
//     L.polygon(json['T17D'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map),
//     L.polygon(json['T17E'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map),
//     L.polygon(json['T17F'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map)]
// var polygon71 = [
//     L.polygon(json['T13B_U21'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map),
//     L.polygon(json['T13B_U22'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map),
//     L.polygon(json['T14B_U21'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map),
//     L.polygon(json['T14B_U22'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map),
//     L.polygon(json['T14B_U23'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map),
//     L.polygon(json['T14B_U25'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map)]
// -----------




// map.fitBounds(polygon.getBounds());
// ---



// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();


export default {
    polygon11: polygon11,
    polygon12: polygon12,
    polygon21: polygon21,
    polygon22: polygon22,
    polygon23: polygon23,
    polygon24: polygon24,
    polygon31: polygon31,
    polygon32: polygon32,
    polygon33: polygon33,
    polygon34: polygon34,
    polygon35: polygon35,
    polygon41: polygon41,
    polygon42: polygon42,
    polygon43: polygon43,
    polygon44: polygon44,
    polygon51: polygon51,
    polygon52: polygon52,
    polygon53: polygon53,
    polygon54: polygon54,
    polygon61: polygon61,
    polygon62: polygon62,
    polygon63: polygon63,
    polygon64: polygon64,
    polygon65: polygon65,
    polygon71: polygon71,
    polygon72: polygon72,
    polygon73: polygon73,
    polygon74: polygon74,
    polygon75: polygon75,
    polygon76: polygon76,
}


// export default {
//     polygon11: polygon11,
//     polygon21: polygon21,
//     polygon31: polygon31,
//     polygon41: polygon41,
//     polygon51: polygon51,
//     polygon61: polygon61,
//     polygon71: polygon71,
// }