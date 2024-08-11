// main.js

document.getElementById('task_info').addEventListener('change', () =>{
    document.getElementById('task_info').style.borderColor = "black"
    document.getElementById('task_info').placeholder = "Task";
})

document.getElementById("add_task").addEventListener('click',() => {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let yellow = Math.floor(Math.random() * 255);

    let task = document.getElementById('task_info');
    let task_list = document.getElementById('task_list');
    

    if (task.value === ''){
        document.getElementById('task_info').style.borderColor = "red";
        document.getElementById('task_info').placeholder = "Error!";
    }else{

        // Lista
        let new_task = document.createElement('li');
        new_task.style.backgroundColor = `rgb(${red}, ${blue}, ${yellow})`;

        // CheckBox Button
        let taskCheckbox = document.createElement('input');
        taskCheckbox.type = "checkbox";
        taskCheckbox.style.width = "20px";

        // Agregar evento al checkbox
        taskCheckbox.addEventListener('change', function () {
            if (this.checked) {
                taskText.style.textDecoration = "line-through";
            } else {
                taskText.style.textDecoration = "none";
            }
        });

        // Text
        let taskText = document.createElement('span');
        taskText.textContent = task.value;

        // Delete Button
        let taskDelete = document.createElement('button');
        taskDelete.innerHTML = '<img src="src/img/eliminar.png" width="15px">';
        taskDelete.id = 'task_delete';

        taskDelete.addEventListener('click', () => {
            while (new_task.firstChild) {
                new_task.removeChild(new_task.firstChild);  
            }
            new_task.remove();
        });

        // ADD TO new_task
        new_task.appendChild(taskCheckbox);
        new_task.appendChild(taskText);
        new_task.appendChild(taskDelete);
        task_list.appendChild(new_task);

        task.value = '';
        
        filterTasks();
    }

});

document.querySelectorAll('input[name="filter"]').forEach(radio => {
    radio.addEventListener('change', filterTasks);
});

function filterTasks() {
    const filterValue = document.querySelector('input[name="filter"]:checked').id;
    const tasks = document.querySelectorAll('#task_list li');

    tasks.forEach(task => {
        const isChecked = task.querySelector('input[type="checkbox"]').checked;

        switch(filterValue) {
            case 'filter_all':
                task.style.display = '';
                break;
            case 'filter_noncompleted':
                task.style.display = isChecked ? 'none' : '';
                break;
            case 'filter_completed':
                task.style.display = isChecked ? '' : 'none';
                break;
        }
    });
}