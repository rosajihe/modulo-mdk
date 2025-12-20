const View = (function() {
    const studentListEl = document.getElementById('studentList');
    const studentForm = document.getElementById('studentForm');
    const studentIdInput = document.getElementById('studentId');
    const nameInput = document.getElementById('name');
    const courseInput = document.getElementById('course');
    const gradeInput = document.getElementById('grade');
    const formSubmitBtn = document.getElementById('formSubmitBtn');
    const searchInput = document.getElementById('searchInput');
    const statusFilter = document.getElementById('statusFilter');
   
   //Funcion para mostrar la lista de estudiantes en la tabla
    function renderStudents(students) {
        studentListEl.innerHTML = '';
        students.forEach(student => {
            const tr = document.createElement('tr');
            tr.classList.add('student-item', student.status);
            tr.innerHTML = `
                <td>${student.name} </td>
                <td>${student.course}</td>
                <td>${student.grade}</td>
                <td colspan="2" class="student-actions">
                    <button class="edit-btn btn-form btn-list" data-id="${student.id}">Editar</button>
                    <button class="delete-btn btn-form btn-list" data-id="${student.id}">Eliminar</button>
                </td>
            `;
            studentListEl.appendChild(tr);
        });
    }

    function setupEventListeners(handlers) {
        // Manejador para agregar/editar en formulario
        studentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const studentData = {
                id: studentIdInput.value,
                name: nameInput.value,
                course: courseInput.value,
                grade: parseInt(gradeInput.value)
            };
            handlers.handleFormSubmit(studentData);
            clearForm();
        });

        // Manejador para eliminar y editar delega estos eventos
        studentListEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                handlers.handleDelete(e.target.dataset.id);
            }
            if (e.target.classList.contains('edit-btn')) {
                handlers.handleEditRequest(e.target.dataset.id);
            }
        });

        // Manejadores para búsqueda y filtro para visualizar los registros
        searchInput.addEventListener('keyup', (e) => handlers.handleFilterChange(e.target.value, statusFilter.value));
        statusFilter.addEventListener('change', (e) => handlers.handleFilterChange(searchInput.value, e.target.value));
    }
    //Funcion para llenar el formulario con la informacion del estudiante para su edicion
    function fillFormForEdit(student) {
        studentIdInput.value = student.id;
        nameInput.value = student.name;
        courseInput.value = student.course;
        gradeInput.value = student.grade;
        formSubmitBtn.textContent = 'Guardar Cambios';
    }
    //Funcion para limpiar el form
    function clearForm() {
        studentIdInput.value = '';
        studentForm.reset();
        formSubmitBtn.textContent = 'Agregar Estudiante';
    }

    return {
        renderStudents,
        setupEventListeners,
        fillFormForEdit,
        clearForm
    };
})();