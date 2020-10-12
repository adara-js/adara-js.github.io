//printReverse
// takes an array and prints out the elements in reverse order
function printReverse(arr) {
	for (var i = arr.length -1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

//isUniform
// returns true if all items in the array are the same
// every version
function isUniformEvery(arr) {
  for (var i = arr.length -1; i>=0; i--) {
    return arr.every(x => (x === arr[i]));
  }
}

// manual comparison version
function isUniformManual(arr) {
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] != first) {
			return false;
		}
	}
	return true;
}

//sumArray
// returns the sum of an array
function sumArray(arr) {
  const reducer = (a,b) => a+b;
  return arr.reduce(reducer);
}

//returnMax
// returns the maximum number
function returnMax(arr) {
	var maxNumber = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > maxNumber) {
			maxNumber = arr[i];
		}
	}
	return maxNumber;
}


