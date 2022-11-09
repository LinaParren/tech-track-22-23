// const h1 = document.querySelector('h1');
// const button = document.querySelector('button');
// const emojis = ['😃', '🙁', '🐭', '🍪', '🎱', '📊'];

// button.addEventListener('click', pickEmoji);

// function pickEmoji() {
// 	h1.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
// }

// pickEmoji(); 

// ---

// import data from '../tarieven.json' assert {type: 'json'};

// const dataj = data;

// ---

fetch("../tarieven.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));

// ----


// {
//   name: 'Alice',
//   country: 'Austria',
//   tasks: [ 'develop', 'design', 'test' ],
//   age: 30
// }
// console.log(data.property);

// console.log(data.description);
// console.log(data.location.type);
// console.log("hallo");

// -------------


// const data = [
// 	{
// 		id: 1,
// 		name: 'Robert',
// 		kaas: true
// 	},
// 	{
// 		id: 2,
// 		name: 'Vincent',
// 		kaas: false
// 	},
// 	{
// 		id: 3,
// 		name: 'Laura',
// 		kaas: true
// 	}
// ]

function generateTable() {

	let table = document.querySelector('table'); // Grab the entire table
	let theading = document.querySelector('thead tr'); // Grab the row in the thead
	let tbody = document.querySelector('tbody') // Grab the body

	Object.keys(dataj).forEach(key => {

		let newElement = document.createElement('th');
		newElement.textContent = key;
		theading.appendChild(newElement);
	})

	dataj.forEach(obj => {

		let tr = document.createElement('tr');
		tbody.appendChild(tr);

		for (const [key, value] of Object.entries(obj)) {

			let td = document.createElement('td');
			td.textContent = value; // Use the value, not the property / key!
			tr.appendChild(td) // And append it to the row we just made.

		}

	})
    // console.log("hallo");
}

generateTable();