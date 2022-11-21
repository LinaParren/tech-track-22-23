// import data from '../tarieven.json' assert {type: 'json'};


// import polygons from "../mapview";


// // ---------------------------------------------------------

// let zone1 = document.querySelector('#zone1');
// zone1.addEventListener('change', kleur);

// function kleur() {
//     var check1 = document.getElementById("zone1");

//     console.log(polygons.polygon4);

//     if (check1.checked == true){
//       polygons.polygon1.setStyle({color: 'red'});
//     }
//     else {
//       polygons.polygon1.setStyle({color: 'none'});
//     }
// }

// // ---------------------------------------------------------

// let zone2 = document.querySelector('#zone2');
// zone2.addEventListener('change', kleur2);

// function kleur2() {
//     var check2 = document.getElementById("zone2");

//     console.log(polygons.polygon2);

//     if (check2.checked == true){
//       polygons.polygon2.setStyle({color: 'orange'});
//     }
//     else {
//       polygons.polygon2.setStyle({color: 'none'});
//     }
// }

// // ---------------------------------------------------------

// let zone3 = document.querySelector('#zone3');
// zone3.addEventListener('change', kleur3);

// function kleur3() {
//     var check3 = document.getElementById("zone3");

//     console.log(polygons.polygon4);

//     if (check3.checked == true){
//       polygons.polygon3.setStyle({color: 'yellow'});
//     }
//     else {
//       polygons.polygon3.setStyle({color: 'none'});
//     }
// }

// // ---------------------------------------------------------

// let zone4 = document.querySelector('#zone4');
// zone4.addEventListener('change', kleur4);

// function kleur4() {
//     var check4 = document.getElementById("zone4");

//     console.log(polygons.polygon4);

//     if (check4.checked == true){
//       polygons.polygon4.setStyle({color: 'green'});
//     }
//     else {
//       polygons.polygon4.setStyle({color: 'none'});
//     }
// }

// // ---------------------------------------------------------

// let zone5 = document.querySelector('#zone5');
// zone5.addEventListener('change', kleur5);

// function kleur5() {
//     var check5 = document.getElementById("zone5");

//     console.log(polygons.polygon5);

//     if (check5.checked == true){
//       polygons.polygon5.setStyle({color: 'blue'});
//     }
//     else {
//       polygons.polygon5.setStyle({color: 'none'});
//     }
// }

// // ---------------------------------------------------------

// let zone6 = document.querySelector('#zone6');
// zone6.addEventListener('change', kleur6);

// function kleur6() {
//     var check6 = document.getElementById("zone6");

//     console.log(polygons.polygon6);

//     if (check6.checked == true){
//       polygons.polygon6.setStyle({color: 'purple'});
//     }
//     else {
//       polygons.polygon6.setStyle({color: 'none'});
//     }
// }

// // ---------------------------------------------------------

// let zone7 = document.querySelector('#zone7');
// zone7.addEventListener('change', kleur7);

// function kleur7() {
//     var check7 = document.getElementById("zone7");

//     console.log(polygons.polygon7);

//     if (check7.checked == true){
//       polygons.polygon7.setStyle({color: 'brown'});
//     }
//     else {
//       polygons.polygon7.setStyle({color: 'none'});
//     }
// }

// ---------------------------------------------------------











// ---------------------------------------------------------

let checkbox = document.querySelector('#myCheck');
checkbox.addEventListener('click', changeCheckbox);

function changeCheckbox() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("texttest");

    if (checkBox.checked == true){
      text.style.color = "green";
    }
    else {
      text.style.color = "blue";
    }
}








// ---------------------------------------------------------

let zone1 = document.querySelector('#zone1');
zone1.addEventListener('change', kleur);

function kleur() {
    var check1 = document.getElementById("zone1");

    if (check1.checked == true){
      polygons.polygon11.setStyle({color: 'red'});
    }
    else {
      polygons.polygon11.setStyle({color: 'none'});
    }
}

// ---------------------------------------------------------

let zone2 = document.querySelector('#zone2');
zone2.addEventListener('change', kleur2);

function kleur2() {
    var check2 = document.getElementById("zone2");

    if (check2.checked == true){
      polygons.polygon21.setStyle({color: 'orange'});
    }
    else {
      polygons.polygon21.setStyle({color: 'none'});
    }
}

// ---------------------------------------------------------

let zone3 = document.querySelector('#zone3');
zone3.addEventListener('change', kleur3);

function kleur3() {
    var check3 = document.getElementById("zone3");

    if (check3.checked == true){
      polygons.polygon31.setStyle({color: 'yellow'});
    }
    else {
      polygons.polygon31.setStyle({color: 'none'});
    }
}

// ---------------------------------------------------------

let zone4 = document.querySelector('#zone4');
zone4.addEventListener('change', kleur4);

function kleur4() {
    var check4 = document.getElementById("zone4");

    if (check4.checked == true){
      polygons.polygon41.setStyle({color: 'green'});
    }
    else {
      polygons.polygon41.setStyle({color: 'none'});
    }
}

// ---------------------------------------------------------

let zone5 = document.querySelector('#zone5');
zone5.addEventListener('change', kleur5);

function kleur5() {
    var check5 = document.getElementById("zone5");

    if (check5.checked == true){
      polygons.polygon51.setStyle({color: 'blue'});
    }
    else {
      polygons.polygon51.setStyle({color: 'none'});
    }
}

// ---------------------------------------------------------

let zone6 = document.querySelector('#zone6');
zone6.addEventListener('change', kleur6);

function kleur6() {
    var check6 = document.getElementById("zone6");

    if (check6.checked == true){
      polygons.polygon61.setStyle({color: 'purple'});
    }
    else {
      polygons.polygon61.setStyle({color: 'none'});
    }
}

// ---------------------------------------------------------

let zone7 = document.querySelector('#zone7');
zone7.addEventListener('change', kleur7);

function kleur7() {
    var check7 = document.getElementById("zone7");

    if (check7.checked == true){
      polygons.polygon71.setStyle({color: 'brown'});
    }
    else {
      polygons.polygon71.setStyle({color: 'none'});
    }
}
