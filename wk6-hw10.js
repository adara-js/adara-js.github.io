function sumArrayReduce(arr) {
    const reducer = (accumulator, currentValue) =>  accumulator + currentValue;
    return arr.reduce(reducer);
}

function sumArrayLoop(arr) {
    let total = 0;

    for (i = 0; i < arr.length; i++) {       
      total += arr[i];
    }
  
    return total;
}