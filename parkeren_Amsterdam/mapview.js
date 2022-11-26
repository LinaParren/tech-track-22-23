/* <reference path="./typings/index.d.ts" /> */
// import { color } from "d3";
import json from "./tarieven.json" assert {
  type: "json"
};
// import "./scripts/test.js"


// ---------------------------------------------------------
var map = L.map('map').setView([52.3702157, 4.8951679], 12);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// ----------------------------------------------------------------------------------------------------

console.log(json);

// const colors = ['red', 'orange', 'yellow', 'pink', 'blue', 'green', 'purple'];

function getColor(tarief) {
    switch (tarief) {
        case '7,50':
            return 'red';
            break;
        case '6,00':
            return 'orange';
            break;
        case '4,50':
            return 'yellow';
            break;
        case '3,50':
            return 'pink';
            break;
        case '1,40':
            return 'blue';
            break;
        case '0,10':
            return 'purple';
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

window.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', changeCheckbox)
  })
})

function changeCheckbox(event) {
  dataSet.forEach(item => {

    if(Object.keys(item.tarieven)[0] === event.target.value) {
      item.polygons.forEach(polygon => {
        if(event.target.checked) {
          polygon.setStyle({color: getColor(event.target.value)})
        } else {
          polygon.setStyle({color: 'none'})
        }
      })
    }
  })
}

console.log(dataSet);


// ------------------------------------------




// const dataSet = Object.keys(json).map(key => {

// console.log(dataSet);

//   let zone1 = document.querySelector('#zone1');
//   zone1.addEventListener('change', kleur);
//   let zone2 = document.querySelector('#zone2');
//   zone2.addEventListener('change', kleur);
//   let zone3 = document.querySelector('#zone3');
//   zone3.addEventListener('change', kleur);
//   let zone4 = document.querySelector('#zone4');
//   zone4.addEventListener('change', kleur);
//   let zone5 = document.querySelector('#zone5');
//   zone5.addEventListener('change', kleur);
//   let zone6 = document.querySelector('#zone6');
//   zone6.addEventListener('change', kleur);

//   let tariefObj = json[key].tarieven[0];
//   let tarief = Object.keys(tariefObj)[0];

//   function kleur() {

//     var check1 = document.getElementById("zone1");
//     if (tarief == "7,50" && check1.checked == true) {
//       console.log("het is 7,50 en checked");
//     } else if (tarief == "7,50" && check1.checked == false) {
//       console.log("het is 7,50 en niet checked");
//     }

//     var check2 = document.getElementById("zone2");
//     if (tarief == "6,00" && check2.checked == true) {
//       console.log("het is 6,00 en checked");
//     } else if (tarief == "6,00" && check2.checked == false) {
//       console.log("het is 6,00 en niet checked");
//     }

//     var check3 = document.getElementById("zone3");
//     if (tarief == "4,50" && check3.checked == true) {
//       console.log("het is 4,50 en checked");
//     } else if (tarief == "4,50" && check3.checked == false) {
//       console.log("het is 4,50 en niet checked");
//     }

//     var check4 = document.getElementById("zone4");
//     if (tarief == "3,50" && check4.checked == true) {
//       console.log("het is 3,50 en checked");
//     } else if (tarief == "3,50" && check4.checked == false) {
//       console.log("het is 3,50 en niet checked");
//     }

//     var check5 = document.getElementById("zone5");
//     if (tarief == "1,40" && check5.checked == true) {
//       console.log("het is 1,40 en checked");
//     } else if (tarief == "1,40" && check5.checked == false) {
//       console.log("het is 1,40 en niet checked");
//     }

//     var check6 = document.getElementById("zone6");
//     if (tarief == "0,10" && check6.checked == true) {
//       console.log("het is 0,10 en checked");
//     } else if (tarief == "0,10" && check6.checked == false) {
//       console.log("het is 0,10 en niet checked");
//     }

// }})


// ------------------------------------------

// Object.keys(json).forEach(key => {

//   let zone1 = document.querySelector('#zone1');
//   zone1.addEventListener('change', kleur);
//   let zone2 = document.querySelector('#zone2');
//   zone2.addEventListener('change', kleur2);
//   let zone3 = document.querySelector('#zone3');
//   zone3.addEventListener('change', kleur3);
//   let zone4 = document.querySelector('#zone4');
//   zone4.addEventListener('change', kleur4);
//   let zone5 = document.querySelector('#zone5');
//   zone5.addEventListener('change', kleur5);
//   let zone6 = document.querySelector('#zone6');
//   zone6.addEventListener('change', kleur6);

//   // let polygons = polygonArray.map(arr => {return L.polygon(arr.map(item => item.reverse())).addTo(map)});

//   let tariefObj = json[key].tarieven[0];
//   let tarief = Object.keys(tariefObj)[0];

//   function kleur() {
//     var check1 = document.getElementById("zone1");
//     if (tarief == "7,50" && check1.checked == true) {
//       console.log("het is 7,50 en checked");
//       // polygons.setStyle({color: 'red'});
//       // return L.polygon(arr.map(item => item.reverse()), {color: "red"}).addTo(map)
//     } else if (tarief == "7,50" && check1.checked == false) {
//       console.log("het is 7,50 en niet checked");
//       // polygons.setStyle({color: 'none'});
//       // return L.polygon(arr.map(item => item.reverse()), {color: "none"}).addTo(map)
//     }
//   }

//   function kleur2() {
//     var check2 = document.getElementById("zone2");
//     if (tarief == "6,00" && check2.checked == true) {
//       console.log("het is 6,00 en checked");
//     } else if (tarief == "6,00" && check2.checked == false) {
//       console.log("het is 6,00 en niet checked");
//     }
//   }

//   function kleur3() {
//     var check3 = document.getElementById("zone3");
//     if (tarief == "4,50" && check3.checked == true) {
//       console.log("het is 4,50 en checked");
//     } else if (tarief == "4,50" && check3.checked == false) {
//       console.log("het is 4,50 en niet checked");
//     }
//   }

//   function kleur4() {
//     var check4 = document.getElementById("zone4");
//     if (tarief == "3,50" && check4.checked == true) {
//       console.log("het is 3,50 en checked");
//     } else if (tarief == "3,50" && check4.checked == false) {
//       console.log("het is 3,50 en niet checked");
//     }
//   }

//   function kleur5() {
//     var check5 = document.getElementById("zone5");
//     if (tarief == "1,40" && check5.checked == true) {
//       console.log("het is 1,40 en checked");
//     } else if (tarief == "1,40" && check5.checked == false) {
//       console.log("het is 1,40 en niet checked");
//     }
//   }

//   function kleur6() {
//     var check6 = document.getElementById("zone6");
//     if (tarief == "0,10" && check6.checked == true) {
//       console.log("het is 0,10 en checked");
//     } else if (tarief == "0,10" && check6.checked == false) {
//       console.log("het is 0,10 en niet checked");
//     }
//   }
// })

// ---------------------------------------------------------

// let zone1 = document.querySelector('#zone1');
// zone1.addEventListener('change', kleur);

// function kleur() {
//   var check1 = document.getElementById("zone1");

//   if (check1.checked == true) {
//     console.log("wel checked")
//   } else {
//     console.log("niet checked")
//   }
// }

// ---------------------------------------------------------

// let zone2 = document.querySelector('#zone2');
// zone2.addEventListener('change', kleur2);

// function kleur2() {
//   var check2 = document.getElementById("zone2");

//   if (check2.checked == true) {
//     console.log("wel checked")
//   } else {
//     console.log("niet checked")
//   }
// }

// ---------------------------------------------------------

// let zone3 = document.querySelector('#zone3');
// zone3.addEventListener('change', kleur3);

// function kleur3() {
//   var check3 = document.getElementById("zone3");

//   if (check3.checked == true) {
//     console.log("wel checked")
//   } else {
//     console.log("niet checked")
//   }
// }

// ---------------------------------------------------------

// let zone4 = document.querySelector('#zone4');
// zone4.addEventListener('change', kleur4);

// function kleur4() {
//   var check4 = document.getElementById("zone4");

//   if (check4.checked == true) {
//     console.log("wel checked")
//   } else {
//     console.log("niet checked")
//   }
// }

// ---------------------------------------------------------

// let zone5 = document.querySelector('#zone5');
// zone5.addEventListener('change', kleur5);

// function kleur5() {
//   var check5 = document.getElementById("zone5");

//   if (check5.checked == true) {
//     console.log("wel checked")
//   } else {
//     console.log("niet checked")
//   }
// }

// ---------------------------------------------------------

// let zone6 = document.querySelector('#zone6');
// zone6.addEventListener('change', kleur6);

// function kleur6() {
//   var check6 = document.getElementById("zone6");

//   if (check6.checked == true) {
//     console.log("wel checked")
//   } else {
//     console.log("niet checked")
//   }
// }

// ---------------------------------------------------------

// let zone7 = document.querySelector('#zone7');
// zone7.addEventListener('change', kleur7);

// function kleur7() {
//   var check7 = document.getElementById("zone7");

//   if (check7.checked == true) {
//     console.log("wel checked")
//   } else {
//     console.log("niet checked")
//   }
// }



// let zone1 = document.querySelector('#zone1');
// zone1.addEventListener('change', kleur);

// function kleur() {
//     var check1 = document.getElementById("zone1");

//         if (check1.checked == true) {
//             return {
//                 polygons: polygonArray.map(arr => {
//                     return L.polygon(arr.map(item => item.reverse()), {
//                         color: getColor(Object.keys(json[key].tarieven[0])[0])
//                     }).addTo(map)
//                     // return L.polygon(arr.map(item => item.reverse()), {color: "none"}).addTo(map)
//                 })
//             }
//         } else {
//             return {
//                 polygons: polygonArray.map(arr => {
//                     // return L.polygon(arr.map(item => item.reverse()), {color: getColor(Object.keys(json[key].tarieven[0])[0])}).addTo(map)
//                     return L.polygon(arr.map(item => item.reverse()), {
//                         color: "none"
//                     }).addTo(map)
//                 })
//             }
//         }
//     })
// }


// Object.keys(json).map(key => {
// Object.keys(json).forEach(key => {

//     let tarievenArray;
//     let tariefObj = json[key].tarieven[0];
//     let tarief = Object.keys(tariefObj)[0];

//     if(tarief === '7,50') {
//         tarievenArray = json[key].tarieven[0];
//     } else if(tarief === '6,00') {
//         tarievenArray = json[key].tarieven[0];
//     } else if(tarief === '4,50') {
//         tarievenArray = json[key].tarieven[0];
//     } else if(tarief === '3,50') {
//         tarievenArray = json[key].tarieven[0];
//     } else if(tarief === '1,40') {
//         tarievenArray = json[key].tarieven[0];
//     } else if(tarief === '0,10') {
//         tarievenArray = json[key].tarieven[0];
//     }

//     return {
//         tariefId: key,
//         areas: tarievenArray,
//         tarieven: json[key].tarieven,
//         tariefs: tarievenArray.map(arr => {
//             return L.polygon(arr.map(item => item.reverse()), {color: colors[randomNumber(0, 6)]}).addTo(map)
//         })
//     }
// })

// console.log(Object.keys(json));

// Object.keys(json).forEach(key => {
//     console.log(json[key].location.coordinates[0][0]);
// })

// Object.keys(json).forEach(key => {
//     let typjes = json[key].location.type;
//     if (typjes == "Polygon") {
//         console.log("polygon");
//     } else if (typjes == "MultiPolygon") {
//         console.log("multipolygon");
//     }
// })

// Object.keys(json).forEach(key => {
//     var tariefObj = json[key].tarieven[0];
//     console.log(Object.keys(tariefObj)[0]);
// })

// Object.keys(json).forEach(key => {
//     let tariefObj = json[key].tarieven[0];
//     let tarief = Object.keys(tariefObj)[0];

//     if (tarief == "7,50") {
//         console.log("het is 7,50");
//     } else if (tarief == "6,00") {
//         console.log("het is 6,00");
//     } else if (tarief == "4,50") {
//         console.log("het is 4,50");
//     } else if (tarief == "3,50") {
//         console.log("het is 3,50");
//     } else if (tarief == "1,40") {
//         console.log("het is 1,40");
//     } else if (tarief == "0,10") {
//         console.log("het is 0,10");
//     }
// })

// Object.keys(json).forEach(key => {
//     let tariefObj = json[key].tarieven[0];
//     let tarief = Object.keys(tariefObj)[0];
//     let typjes = json[key].location.type;
//     if        (tarief == "7,50" && typjes == "Polygon") {
//         console.log("het is 7,50 en polygon");
//     } else if (tarief == "6,00" && typjes == "Polygon") {
//         console.log("het is 6,00 en polygon");
//     } else if (tarief == "6,00" && typjes == "MultiPolygon") {
//         console.log("het is 6,00 en multipolygon");
//     } else if (tarief == "4,50" && typjes == "Polygon") {
//         console.log("het is 4,50 en polygon");
//     } else if (tarief == "4,50" && typjes == "MultiPolygon") {
//         console.log("het is 4,50 en multipolygon");
//     } else if (tarief == "3,50" && typjes == "Polygon") {
//         console.log("het is 3,50 en polygon");
//     } else if (tarief == "3,50" && typjes == "MultiPolygon") {
//         console.log("het is 3,50 en multipolygon");
//     } else if (tarief == "1,40" && typjes == "Polygon") {
//         console.log("het is 1,40 en polygon");
//     } else if (tarief == "1,40" && typjes == "MultiPolygon") {
//         console.log("het is 1,40 en multipolygon");
//     } else if (tarief == "0,10" && typjes == "Polygon") {
//         console.log("het is 0,10 en polygon");
//     } else if (tarief == "0,10" && typjes == "MultiPolygon") {
//         console.log("het is 0,10 en multipolygon");
//     } else {
//         console.log("neej");
//     } 
// })


// console.log(json[key].location.coordinates[1][0]);




//     // L.polygon(json[key].location.coordinates[0].flat().map(item => item.reverse()), {color: 'black'}).addTo(map)
//     L.polygon(json['T11A'].location.coordinates[0].map(), {color: 'black'}).addTo(map);
// })

// var polygon = L.polygon(json['T11A'].location.coordinates[0].flat().map(item => item.reverse()), {color: 'black'}).addTo(map);

// // ------ COMMENT DIT UIT!!!!!
// var polygon11 = L.polygon(json['T11N'].location.coordinates[0].map(item => item.reverse()), {color: 'red'}).addTo(map);
// var polygon12 = L.polygon(json['T11A'].location.coordinates[0].map(item => item.reverse()), {color: 'red'}).addTo(map);
// var polygon21 = L.polygon(json['T12A'].location.coordinates[0].map(item => item.reverse()), {color: 'orange'}).addTo(map);
// var polygon22 = L.polygon(json['T12B'].location.coordinates[0].map(item => item.reverse()), {color: 'orange'}).addTo(map);
// var polygon23 = L.polygon(json['T12C'].location.coordinates[0].map(item => item.reverse()), {color: 'orange'}).addTo(map);
// var polygon24 = L.polygon(json['T12D'].location.coordinates[0].map(item => item.reverse()), {color: 'orange'}).addTo(map);
// var polygon31 = L.polygon(json['T13A'].location.coordinates[0].map(item => item.reverse()), {color: 'yellow'}).addTo(map);
// var polygon32 = L.polygon(json['T13B'].location.coordinates[0][0].map(item => item.reverse()), {color: 'yellow'}).addTo(map);
// var polygon33 = L.polygon(json['T13C'].location.coordinates[0].map(item => item.reverse()), {color: 'yellow'}).addTo(map);
// var polygon34 = L.polygon(json['T13D'].location.coordinates[0][0].map(item => item.reverse()), {color: 'yellow'}).addTo(map);
// var polygon35 = L.polygon(json['T13G'].location.coordinates[0][0].map(item => item.reverse()), {color: 'yellow'}).addTo(map);
// var polygon41 = L.polygon(json['T14B'].location.coordinates[0].map(item => item.reverse()), {color: 'green'}).addTo(map);
// var polygon42 = L.polygon(json['T14C'].location.coordinates[0][0].map(item => item.reverse()), {color: 'green'}).addTo(map);
// var polygon43 = L.polygon(json['T14E'].location.coordinates[0].map(item => item.reverse()), {color: 'green'}).addTo(map);
// var polygon44 = L.polygon(json['T14G'].location.coordinates[0].map(item => item.reverse()), {color: 'green'}).addTo(map);
// var polygon51 = L.polygon(json['T16A'].location.coordinates[0].map(item => item.reverse()), {color: 'blue'}).addTo(map);
// var polygon52 = L.polygon(json['T16B'].location.coordinates[0].map(item => item.reverse()), {color: 'blue'}).addTo(map);
// var polygon53 = L.polygon(json['T16C'].location.coordinates[0].map(item => item.reverse()), {color: 'blue'}).addTo(map);
// var polygon54 = L.polygon(json['T16D'].location.coordinates[0].map(item => item.reverse()), {color: 'blue'}).addTo(map);
// var polygon61 = L.polygon(json['T17A'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map);
// var polygon62 = L.polygon(json['T17C'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map);
// var polygon63 = L.polygon(json['T17D'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map);
// var polygon64 = L.polygon(json['T17E'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map);
// var polygon65 = L.polygon(json['T17F'].location.coordinates[0].map(item => item.reverse()), {color: 'purple'}).addTo(map);
// var polygon71 = L.polygon(json['T13B_U21'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
// var polygon72 = L.polygon(json['T13B_U22'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
// var polygon73 = L.polygon(json['T14B_U21'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
// var polygon74 = L.polygon(json['T14B_U22'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
// var polygon75 = L.polygon(json['T14B_U23'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
// var polygon76 = L.polygon(json['T14B_U25'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);

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
// console.log(json);

// json.forEach(json => {
//     console.log(description);
// });
// -----------



// -----------
// var polygon11 = L.polygon(json['T11A'].location.coordinates[0].map(item => item.reverse()), {color: 'black'}).addTo(map);
// var polygon12 = L.polygon(json['T11N'].location.coordinates[0].map(item => item.reverse()), {color: 'brown'}).addTo(map);
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
//     L.polygon(json['T13B'].location.coordinates[0][0].map(item => item.reverse()), {color: 'yellow'}).addTo(map),
//     L.polygon(json['T13C'].location.coordinates[0].map(item => item.reverse()), {color: 'yellow'}).addTo(map),
//     L.polygon(json['T13D'].location.coordinates[0][0].map(item => item.reverse()), {color: 'yellow'}).addTo(map),
//     L.polygon(json['T13G'].location.coordinates[0][0].map(item => item.reverse()), {color: 'yellow'}).addTo(map)]
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


// export default {
//     polygon11: polygon11,
//     polygon12: polygon12,
//     polygon21: polygon21,
//     polygon22: polygon22,
//     polygon23: polygon23,
//     polygon24: polygon24,
//     polygon31: polygon31,
//     polygon32: polygon32,
//     polygon33: polygon33,
//     polygon34: polygon34,
//     polygon35: polygon35,
//     polygon41: polygon41,
//     polygon42: polygon42,
//     polygon43: polygon43,
//     polygon44: polygon44,
//     polygon51: polygon51,
//     polygon52: polygon52,
//     polygon53: polygon53,
//     polygon54: polygon54,
//     polygon61: polygon61,
//     polygon62: polygon62,
//     polygon63: polygon63,
//     polygon64: polygon64,
//     polygon65: polygon65,
//     polygon71: polygon71,
//     polygon72: polygon72,
//     polygon73: polygon73,
//     polygon74: polygon74,
//     polygon75: polygon75,
//     polygon76: polygon76
// }


// export default {
//     polygon11: polygon11,
//     polygon21: polygon21,
//     polygon31: polygon31,
//     polygon41: polygon41,
//     polygon51: polygon51,
//     polygon61: polygon61,
//     polygon71: polygon71
// }