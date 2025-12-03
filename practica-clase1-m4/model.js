const Model = (function() {
    let notes = [];

    
    function getNotes() {
        return notes;
    }

  
    function addNote(noteText) {
        if (noteText.trim() === '') return;
        const note = {
            id: Date.now(), 
            text: noteText.trim()
        };
        notes.push(note);
       
    }

    function deleteNote(id) {
        notes = notes.filter(note => note.id !== id);
        
    }

    return {
        getNotes,
        addNote,
        deleteNote
    };
})();