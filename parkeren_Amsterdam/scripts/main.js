// const h1 = document.querySelector('h1');
// const button = document.querySelector('button');
// const emojis = ['😃', '🙁', '🐭', '🍪', '🎱', '📊'];

// button.addEventListener('click', pickEmoji);

// function pickEmoji() {
// 	h1.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
// }

// pickEmoji(); 


import myJson from '../tarieven.json' assert {type: 'json'};

// 👇️ {
//   name: 'Alice',
//   country: 'Austria',
//   tasks: [ 'develop', 'design', 'test' ],
//   age: 30
// }
console.log(myJson.property);

console.log(myJson.description);
console.log(myJson.location.type);
console.log("hallo");
