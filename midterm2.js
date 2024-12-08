const taskInput = document.getElementById('taskInput');
const reminderInput = document.getElementById('reminderInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `list-group-item d-flex justify-content-between align-items-center text-wrap text-break ${
            task.completed ? 'text-decoration-line-through text-success' : ''
        }`;

        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        li.appendChild(taskText);

        const controls = document.createElement('div');        
        
        taskText.addEventListener('click', () => toggleTask(index));

        const editButton = document.createElement('button');
        editButton.className = 'btn btn-warning btn-sm me-2';
        editButton.innerHTML = '<i class="bi bi-pencil"></i>'; 
        editButton.addEventListener('click', () => enableTaskEditing(index));
        controls.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.innerHTML = '<i class="bi bi-trash"></i>'; 
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });
        controls.appendChild(deleteButton);

        li.appendChild(controls);

        taskList.appendChild(li);
    });
}


function addTask() {
    const taskText = taskInput.value.trim();
    const reminderTime = reminderInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const task = { text: taskText, completed: false, reminder: reminderTime };
    tasks.push(task);
    saveTasks();
    renderTasks();

    if (reminderTime) {
        scheduleReminder(taskText, reminderTime);
    }

    taskInput.value = '';
    reminderInput.value = '';
}

function toggleTask(index) {
    console.log('Toggle task at index:', index); 
    tasks[index].completed = !tasks[index].completed;
    console.log('Updated task:', tasks[index]);
    saveTasks();
    renderTasks();
}

function scheduleReminder(taskText, reminderTime) {
    const reminderDate = new Date(reminderTime).getTime();
    const currentTime = Date.now();
    const timeDifference = reminderDate - currentTime;

    if (timeDifference > 0) {
        setTimeout(() => {
            alert(`Reminder: ${taskText}`);
        }, timeDifference);
    } else {
        alert('The reminder time has already passed!');
    }
}

function enableTaskEditing(index) {
    const li = document.querySelectorAll('#taskList li')[index];

    const input = document.createElement('input');
    input.type = 'text';
    input.value = tasks[index].text;
    input.className = 'form-control';
    li.textContent = ''; 
    li.appendChild(input); 

    input.focus();

    const saveEdit = () => {
        const newText = input.value.trim();
        if (newText !== '') {
            tasks[index].text = newText; 
            saveTasks();
            renderTasks(); 
        } else {
            alert('Task cannot be empty!');
        }
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveEdit();
    });

    input.addEventListener('blur', saveEdit);
}

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();  
    }
});

renderTasks();
