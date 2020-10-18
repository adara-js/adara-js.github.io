const hello = document.getElementById('hello');
const goodbye = document.getElementById('goodbye');

hello.addEventListener('click', () => {
	console.log('Hello');
});

goodbye.addEventListener('click', () => {
	console.log('Goodbye');
});