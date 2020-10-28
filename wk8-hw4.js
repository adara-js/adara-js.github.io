const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let charArray = document.querySelectorAll('span');
for (let i=0; i<charArray.length; i++) {
    charArray[i].style.color = colors[i];
};