// Is Even
// Takes a number and returns true if even and false if odd
function isEven(number) {
	 if(number%2 === 0) {
	 	return true;
	 } 

	 return false;
}

// Factorial
// Takes a number and returns the factorial
function factorial(number) {
	if (number === 0) {
    return 1;
	}
	
  let arr = [];
	for (i = number; i>0; i--) {
		arr.push(i);
	}  
  
  return arr.reduce((a,b) => a*b);
}

// kebabToSnake
// Takes a string in kebab case and converts it to snake case

function kebabToSnake(string) {
	return string.replace(/-/g,'_');
}