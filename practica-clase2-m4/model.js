const Model = (function() {
    // arreglo vacio donde se almacenan las tareas
let notes = [];

    // Modelo funciones
    return {
        //Funcion para agregar la tarea
        addNote: function(noteText) {
            const note = {
                id: Date.now(), // Genera el ID con el metodo de marca de tiempo
                text: noteText,
                completed: false // valor del checkbox que dice si esta hecha la tarea
            };
            notes.push(note);
            // Debemos notificar al controlador que los datos han cambiado
            document.dispatchEvent(new CustomEvent('notesUpdated', { detail: notes }));
        },
        //Funcion para actualizar la tarea con la marcacion del checkbox
        toggleNote: function(id) {
            notes = notes.map(note =>
                note.id === id ? { ...note, completed: !note.completed } : note
            );
            // Notificamos al controlador
            document.dispatchEvent(new CustomEvent('notesUpdated', { detail: notes }));
        },
        // Funcion para borrar la tarea
        deleteNote: function(id) {
            notes = notes.filter(note => note.id !== id);
            // Notificamos al controlador
            document.dispatchEvent(new CustomEvent('notesUpdated', { detail: notes }));
        },
        //Funcion para traer la lista de tareas
        getNotes: function() {
            return notes;
        }
    };
})();