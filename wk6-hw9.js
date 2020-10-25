function capitalize(str) {
    let myString = str;
    let firstLetter = myString[0].toUpperCase();
    let remaining = myString.slice(1,str.length);
  
    return firstLetter + remaining;
}