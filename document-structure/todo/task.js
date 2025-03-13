function createTask(text) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';

    const titleElement = document.createElement('div');
    titleElement.className = 'task__title';
    titleElement.textContent = text;

    const removeLink = document.createElement('a');
    removeLink.className = 'task__remove';
    removeLink.href = '#';

    removeLink.addEventListener('click', function (event) {
        event.preventDefault();
        taskElement.remove();
    });

    taskElement.appendChild(titleElement);
    taskElement.appendChild(removeLink);

    tasksList.appendChild(taskElement);
}

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        form.submit();
    }
})