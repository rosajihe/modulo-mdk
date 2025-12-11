const View = (function() {
    const noteListEl = document.getElementById('noteList');
    const noteInputEl = document.getElementById('noteInput');
    const addButtonEl = document.getElementById('addButton');

    // Función para crear una tarea
    const createNoteElement = function(note) {
        const li = document.createElement('li');
        li.classList.add('note-item');

        //Condicion para ver agregar una clase si la tarea esta marcada como hecha     
        if (note.completed) {
            li.classList.add('completed');
        }
        li.dataset.id = note.id;
        // se agregara una tarea a la lista
        li.innerHTML = `
            <input type="checkbox" class="checkbox-btn" ${note.completed ? 'checked' : ''}>
            <span>${note.text}</span>
            <button class="delete-btn">Eliminar</button>
        `;

        return li;
    };

    // Función para renderizar todas las tareas
    return {
        render: function(notes) {
            // Limpiar la lista de tareas
            noteListEl.innerHTML = ''; 
            // Bucle que recorre el arreglo de tareas
            notes.forEach(note => {
                noteListEl.appendChild(createNoteElement(note));
            });
        },
        //Funcion que regresa el valor del input
        getInput: function() {
            return noteInputEl.value;
        },
        //Funcion que limpia  el valor del input
        clearInput: function() {
            noteInputEl.value = '';
        },
        // Da a conocer los  elementos para que el Controlador pueda añadir listeners
        noteListEl,
        addButtonEl
    };
})();