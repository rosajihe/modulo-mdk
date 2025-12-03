const Controller = (function(Model, View) {


    function handleAddNote() {
        const noteText = View.getInput();
        if (noteText) {
            Model.addNote(noteText);
            View.clearInput();
            updateView();
        }
    }

    
    function handleDeleteNote(event) {
        if (event.target.classList.contains('delete-btn')) {
            const noteId = parseInt(event.target.dataset.id);
            Model.deleteNote(noteId);
            updateView();
        }
    }

    
    function updateView() {
        const notes = Model.getNotes();
        View.render(notes);
    }

  
    function init() {
        View.addNoteButton.addEventListener('click', handleAddNote);
        View.noteListElement.addEventListener('click', handleDeleteNote); 
        updateView(); 
    }

    return {
        init
    };

})(Model, View);


document.addEventListener('DOMContentLoaded', Controller.init);