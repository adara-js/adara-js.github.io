// Is Even
// Takes a number and returns true if even and false if odd
function isEven(number) {
	return number%2 === 0;
}

// Factorial
// Takes a number and returns the factorial
function factorial(number) {
  if (number === 0) {
     return 1;
	}
	
	let factorial = 1;
	for (i = number; i>0; i--) {
		factorial *= i;
	}  
  
  	return factorial;
}

// kebabToSnake
// Takes a string in kebab case and converts it to snake case
function kebabToSnake(string) {
	return string.replace(/-/g,'_');
}