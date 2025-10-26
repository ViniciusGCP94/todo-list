let tasks = [];

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('button[type="submit"]');
    if (addButton) {
        addButton.addEventListener('click', (e) => {
            e.preventDefault();
            addTask();
        });
    }
    const input = document.querySelector('input[placeholder="Adicionar Item"]');
    if (input) {
        input.addEventListener('keypress', ({key}) => {
            if (key === 'Enter') {
                addTask();
            }
        });
    }
});

const addTask = () => {
    const input = document.querySelector('input[type="text"]');
    const {value: taskText} = input;

    if (taskText === '') return; 

    const todoContainer = document.querySelector('[data-section="tarefas"]');

    const newTask = createTaskElement(taskText, false);
    todoContainer.appendChild(newTask);
    
    input.value = '';
}

const createTaskElement = (text, completed) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item flex justify-between items-center text-xl p-4 mb-2 shadow-xl/30 bg-indigo-600 rounded-lg mb-3';
    taskDiv.innerHTML = `
        <input type="checkbox" class="task-checkbox w-7 h-7 appearance-none border-2 rounded-full border-gray-50 bg-gray-50 checked:bg-green-200 checked:border-green-200 relative" ${completed ? 'checked' : ''}>
        <span class="task-text flex-1 px-4">${text}</span>
        <button class="delete-btn border-1 border-gray-50 px-2 py-1 rounded-md">Excluir</button>
    `;
     
    return taskDiv;
}

const renderTasks = () => {
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

document.addEventListener('change', ({target}) => {
    if (target.classList.contains('task-checkbox')) {
        const taskElement = target.closest('.task-item');
        moveTask(taskElement, target.checked);
    }
});

document.addEventListener('click', ({target}) => {
    if (target.classList.contains('delete-btn')) {
        const taskElement = target.closest('.task-item');
        taskElement.remove();
    }
});

const moveTask = (taskElement, isCompleted) => {
    const todoContainer = document.querySelector('[data-section="tarefas"]');
    const completedContainer = document.querySelector('[data-section="completas"]');
    
    if (isCompleted) {
        completedContainer.appendChild(taskElement);
    } else {
        todoContainer.appendChild(taskElement);
    }
}
