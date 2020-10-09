var age = prompt("How old are you?");

if (age < 18) {
	alert('Sorry, you are not old enough to enter the venue.');
} else if (age < 21) {
	alert('You can enter, but cannot drink.');
} else if (age < 0) {
	alert('Please finish living your past lifetime!');
} else if (age = 21) {
	alert('Happy 21st birthday!');
} else if (age%2 != 0) {
	alert('Your age is odd!');
} else {
	alert('Come on in. You can drink.');
}
