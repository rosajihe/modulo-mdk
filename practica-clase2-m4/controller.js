const Controller = (function(Model, View) {
 //Funcion que recibe el controlador para agregar una tarea
 const handleAddNote = function() {
        const newNoteText = View.getInput();
        if (newNoteText.trim() !== '') {
            Model.addNote(newNoteText);
            View.clearInput();
        }
    };

    // Esta funcion maneja los clics en la lista de tareas ya sea del checkbox o eliminar
    const handleListClick = function(event) {
        const clickedElement = event.target;
        const noteId = parseInt(clickedElement.closest('.note-item').dataset.id);

        if (clickedElement.classList.contains('delete-btn')) {
            Model.deleteNote(noteId);
        } else if (clickedElement.classList.contains('checkbox-btn')) {
            Model.toggleNote(noteId);
        }
    };

    // Suscribirse a los eventos personalizados del modelo para actualizar la vista
    document.addEventListener('notesUpdated', function(event) {
        View.render(event.detail);
    });

    // Esta funcion inicializa los elementos de la vista
    const init = function() {
        View.addButtonEl.addEventListener('click', handleAddNote);
        View.noteListEl.addEventListener('click', handleListClick);
        // Renderizar la vista inicial
        View.render(Model.getNotes());
    };

    return {
        init: init
    };

})(Model, View);

//esta funcion inicializa la aplicacion 
document.addEventListener('DOMContentLoaded', Controller.init);