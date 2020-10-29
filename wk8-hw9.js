const listForm = document.getElementById('listForm');
listForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let groceryItem = document.querySelectorAll('input')[0].value;
    let qty = document.querySelectorAll('input')[1].value;
    let list = document.getElementById('list');
    
    let newItem = document.createElement('li');
    newItem.append(groceryItem);
    newItem.append(qty);
    list.append(newItem);

    document.querySelectorAll('input')[0].value = '';
    document.querySelectorAll('input')[1].value = '';
});

