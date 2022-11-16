// import data from '../tarieven.json' assert {type: 'json'};


import polygons from "../mapview";

console.log('dit is hier')
console.log(polygons.polygon21);

// import "./main.js"

// import polygons from "../mapview.js";

// console.log(polygons);


let zone11 = document.querySelector('#zone1');
zone11.addEventListener('change', kleur);

function kleur() {
    var checkB = document.getElementById("zone1");
    var tekst1 = document.getElementById("tekst1");
    // var pols = document.getElementById("pol21");
    // var polygon21 = L.polygon(json['T12A'].location.coordinates[0][0].map(item => item.reverse()), {color: 'blue'}).addTo(map);
    

    console.log(polygons.polygon21);



    if (checkB.checked == true){
      // polygon21 = L.polygon(json['T12A'].location.coordinates[0][0].map(item => item.reverse()), {color: 'red'}).addTo(map);
      tekst1.style.color = "green";
      polygons.polygon21.setStyle({color: 'green'});
    }
    else {
      // polygon21 = L.polygon(json['T12A'].location.coordinates[0][0].map(item => item.reverse()), {color: 'orange'}).addTo(map);
      tekst1.style.color = "red";
      polygons.polygon21.setStyle({color: 'red'});
    }
}


let checkbox = document.querySelector('#myCheck');
checkbox.addEventListener('click', changeCheckbox);

function changeCheckbox() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("texttest");

    console.log(polygons.polygon21);

    if (checkBox.checked == true){
      text.style.color = "green";
    }
    else {
      text.style.color = "blue";
    }
}
