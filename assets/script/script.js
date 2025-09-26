let tasks = [];

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('button[type="submit"]');
    if (addButton) {
        addButton.addEventListener('click', function(e) {
            e.preventDefault();
            addTask();
        });
    }
    const input = document.querySelector('input[placeholder="Adicionar Item"]');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    }
});

function addTask(){
    const input = document.querySelector('input[type="text"]');
    const taskText = input.value.trim();

    if (taskText === '') return; 

    const todoContainer = document.querySelector('[data-section="tarefas"]');

    const newTask = createTaskElement(taskText, false);
    todoContainer.appendChild(newTask);
    
    input.value = '';
}

function createTaskElement(text, completed) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item flex justify-between items-center text-xl p-4 mb-2 shadow-xl/30 bg-indigo-600 rounded-lg mb-3';
    taskDiv.innerHTML = `
        <input type="checkbox" class="task-checkbox w-7 h-7 appearance-none border-2 rounded-full border-gray-50 bg-gray-50 checked:bg-green-200 checked:border-green-200 relative" ${completed ? 'checked' : ''}>
        <span class="task-text flex-1 px-4">${text}</span>
        <button class="delete-btn border-1 border-gray-50 px-2 py-1 rounded-md">Excluir</button>
    `;
     
    return taskDiv;
}

function renderTasks() {
    const todoContainer = document.querySelector('[data-section="tarefas"]');
    const completedContainer = document.querySelector('[data-section="completas"]');

    todoContainer.innerHTML = '';
    completedContainer.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = createTaskElement(task.text, task.completed);
        if (task.completed) {
            completedContainer.appendChild(taskElement);
        } else {
            todoContainer.appendChild(taskElement);
        }
    });
}

document.addEventListener('change', function(e) {
    if (e.target.classList.contains('task-checkbox')) {
        const taskElement = e.target.closest('.task-item');
        moveTask(taskElement, e.target.checked);
    }
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const taskElement = e.target.closest('.task-item');
        taskElement.remove();
    }
});

function moveTask(taskElement, isCompleted) {
    const todoContainer = document.querySelector('[data-section="tarefas"]');
    const completedContainer = document.querySelector('[data-section="completas"]');
    
    if (isCompleted) {
        completedContainer.appendChild(taskElement);
    } else {
        todoContainer.appendChild(taskElement);
    }
}
