let rootNode = document.getElementById('root');
let container = document.getElementById('container');
let taskDiv = document.getElementById('task-div');
let addButton = document.getElementById('add');
let inputData = document.getElementById('new-data');
let listWrapper = document.querySelector('ul');
let hav = 0.5;
let ten = 10;
function createElement(task) {
    let itemList = document.createElement('li');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let checkbox = document.createElement('button');
    let editButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    checkbox.innerHTML = '<i class="material-icons checkbox-button_item">check_box_outline_blank</i>';
    checkbox.className = 'checkbox material-icons ';
    label.innerText = task;
    input.type = 'text';
    input.className = 'list-input';
    editButton.className = ' edit material-icons';
    editButton.innerHTML = '<i class="material-icons checkbox-button_item">edit</i>';
    deleteButton.className = 'material-icons delete';
    deleteButton.innerHTML = '<i class="material-icons checkbox-button_item">delete</i>';

    itemList.appendChild(checkbox);
    itemList.appendChild(label);
    itemList.appendChild(input)
    itemList.draggable = true;
    itemList.appendChild(editButton);
    itemList.appendChild(deleteButton);
    return itemList;
}

addButton.addEventListener('click', addTask);

function addTask() {
    if (inputData.value) {
        let itemList = createElement(inputData.value);
        listWrapper.appendChild(itemList);
        bindTaskEvents(itemList);
        inputData.value = '';
    }
    if (!(listWrapper.children.length < ten)) {
        let tag_p = document.createElement('p');
        tag_p.innerHTML = 'Maximum item per list are created';
        tag_p.className = 'notification';
        container.insertBefore(tag_p, taskDiv);
        addButton.removeEventListener('click', addTask);
        inputData.disabled = 'disabled';
    }
    sort(listWrapper);
}

function deleteTask() {
    let itemList = this.parentNode;
    let ul = itemList.parentNode;
    ul.removeChild(itemList);
}

function editTask() {
    let editButton = this;
    let itemList = this.parentNode;
    let label = itemList.querySelector('label');
    let input = itemList.querySelector('input[type = text]');

    let containClass = itemList.classList.contains('editMode');

    if (containClass) {
        label.innerText = input.value;
        editButton.className = 'material-icons edit';
        editButton.innerHTML = '<i class="material-icons checkbox-button_item">edit</i>';
    } else {
        input.value = label.innerText;
        editButton.className = 'material-icons save';
        editButton.innerHTML = '<i class="material-icons checkbox-button_item">save</i>';
    }

    itemList.classList.toggle('editMode');
}

function finishTask() {
    let itemList = this.parentNode;
    let checkbox = itemList.querySelector('button.checkbox');
    checkbox.className = 'material-icons checkbox';
    checkbox.innerHTML = '<i class="material-icons checkbox-button_item">check_box</i>';
    checkbox.removeEventListener('click', finishTask);
}

function bindTaskEvents(itemList) {
    let deleteButton = itemList.querySelector('button.delete');
    let editButton = itemList.querySelector('button.edit');
    let checkbox = itemList.querySelector('button.checkbox');

    deleteButton.addEventListener('click', deleteTask);
    editButton.addEventListener('click', editTask);
    checkbox.addEventListener('click', finishTask);
}

function sort(rootEl) {
    let dragElement;
    function dragOver(event) {
        let target = event.target;
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';

        if (target && target !== dragElement && target.nodeName === 'LI') {

            let rect = target.getBoundingClientRect();
            let next = (event.clientY - rect.top) / (rect.bottom - rect.top) > hav;
            rootEl.insertBefore(dragElement, next && target.nextSibling || target);
        }
    }

    function dragEnd(event) {
        event.preventDefault();
        rootEl.removeEventListener('dragover', dragOver, false);
        rootEl.removeEventListener('dragend', dragEnd, false);
    }

    rootEl.addEventListener('dragstart', function (event) {
        dragElement = event.target;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('Text', dragElement.textContent);
        rootEl.addEventListener('dragover', dragOver, false);
        rootEl.addEventListener('dragend', dragEnd, false);

    }, false);
}