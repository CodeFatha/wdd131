const button = document.querySelector('button');
const input = document.querySelector('input');
button.addEventListener('click', function() {
    const deleteButton = document.createElement('button');
    const list = document.querySelector('#list');
    const listItem = document.createElement('li');
    if (input.value.trim() !== '') {
        deleteButton.textContent = '❌';
        listItem.textContent = input.value;
        list.appendChild(listItem);
        listItem.appendChild(deleteButton);
        listItem.textContent = input.value;
        listItem.append(deleteButton);
        input.value = '';
    }
    
    deleteButton.addEventListener('click', function() {
        list.removeChild(listItem);
    });
    input.focus();
});
