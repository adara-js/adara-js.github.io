let parent = document.getElementById('container');

for (i = 0; i < 100; i++) {
    let button = document.createElement('button');
    button.innerHTML = 'Hey!';
    parent.appendChild(button);
}