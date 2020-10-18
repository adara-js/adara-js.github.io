var header = document.querySelector('h1');
var button = document.querySelector('button');


button.addEventListener('click', getColor);

function getColor() {
	let R = Math.floor(Math.random() * 256);
	let G = Math.floor(Math.random() * 256);
	let B = Math.floor(Math.random() * 256);

	let color = `rgb(${R},${G},${B})`;
	header.innerHTML = color;
	document.body.style.backgroundColor = color;
};
