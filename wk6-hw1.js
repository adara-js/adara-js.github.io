var isPink = false;

window.onload = function() {
document.getElementById('main').addEventListener("click", function() {

	if (isPink) {
		document.body.style.backgroundColor = '#fff';
		isPink = false;	
	} else {
		document.body.style.backgroundColor = '#ff0066'
		isPink = true;
	}
	
});

};


