const View = (function() {
    const noteListElement = document.getElementById('note-list');
    const noteInputElement = document.getElementById('note-input');
    const addNoteButton = document.getElementById('add-note-button');

    function render(notes) {
        noteListElement.innerHTML = ''; 
        notes.forEach(note => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${note.text}
                <button class="delete-btn" data-id="${note.id}">Borrar</button>
            `;
            noteListElement.appendChild(li);
        });
    }

 
    function getInput() {
        return noteInputElement.value;
    }


    function clearInput() {
        noteInputElement.value = '';
    }


    return {
        render,
        getInput,
        clearInput,
        addNoteButton,
        noteListElement
    };
})();