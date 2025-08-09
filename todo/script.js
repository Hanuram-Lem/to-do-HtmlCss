
taskList = [];

showTodoList();

function showTodoList() {
    let todolistHTML = '';

    taskList.forEach((addTask) => {
            let {taskName,dueDate} = addTask;
            let html = `
            <div>${taskName}</div>
            <div>${dueDate}</div>
            <button class="deleteButton js-todo-delete-btn">Delete</button>`;
            todolistHTML += html;
        }
    );
    
    document.querySelector('.main-tasks').innerHTML = todolistHTML;

    document.querySelectorAll('.js-todo-delete-btn').forEach((deleteButton, i) => {
        deleteButton.addEventListener('click', () => {
            taskList.splice(i,1);
            showTodoList();
        });
    });
}

function addList() {
    let tasks = document.querySelector('.js-add-task');
    let date = document.querySelector('.js-input-date');
    let taskName = tasks.value;
    let dueDate = date.value;
    if(taskName != '' && dueDate != '') {
        taskList.push({taskName,dueDate});
    }
    tasks.value = '';
    date.value = '';
    showTodoList();
}

document.querySelector('.addButton').addEventListener('click', () => {
    addList();
});

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        addList();
    }
});