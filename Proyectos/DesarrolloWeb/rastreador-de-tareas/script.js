document.addEventListener('DOMContentLoaded', function() {
    // Variables para los elementos del DOM
    const taskInput = document.getElementById('nombre-tarea');
    const addTaskBtn = document.getElementById('agregar-tarea');
    const taskList = document.getElementById('tareas');

    // Obtener tareas del localStorage o inicializar como un array vacío
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Función para renderizar todas las tareas guardadas en el localStorage
    function renderTasks() {
        taskList.innerHTML = ''; // Limpiar la lista antes de renderizar
        var taskContainer = document.getElementById('contenedor-tareas');
        taskContainer.style.margin = "20px";

        tasks.forEach(function(task, index) {
            // Crear elementos de la tarea
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;

            const taskText = document.createElement('span');
            taskText.textContent = task.text;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Eliminar';
            removeBtn.id = 'boton-elimiar'
            
            // Agregar eventos para marcar como completada y eliminar la tarea
            checkbox.addEventListener('change', function() {
                tasks[index].completed = checkbox.checked;
                saveTasks();
                renderTasks();
            });

            removeBtn.addEventListener('click', function() {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });

            // Agregar elementos al elemento <li> y al <ul>
            li.appendChild(checkbox);
            li.appendChild(taskText);
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            // Aplicar estilo si la tarea está completada
            if (task.completed) {
                li.classList.add('completed');
            }
        });
    }

    // Función para guardar las tareas en localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Evento de click en el botón "Agregar Tarea"
    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push({ text: taskText, completed: false });
            saveTasks();
            renderTasks();
            taskInput.value = ''; // Limpiar el campo de entrada
        }
    });

    // Renderizar las tareas al cargar la página por primera vez
    renderTasks();
});
