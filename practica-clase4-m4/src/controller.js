const Controller = (function(Model, View) {
    //Funcion para inicializar 
    function initialize() {
        Model.init();
        View.setupEventListeners({
            handleFormSubmit,
            handleDelete,
            handleEditRequest,
            handleFilterChange
        });
        updateStudentList();
    }
    //Funcion para actualizar la lista de la tabla ,segun el filtro seleccionado
    function updateStudentList(searchTerm = '', statusFilter = 'all') {
        const filteredStudents = Model.filterStudents(searchTerm, statusFilter);
        View.renderStudents(filteredStudents);
    }
    //Funcion que determina si el registro se actualiza o se agrega 
    function handleFormSubmit(studentData) {
        if (studentData.id) {
            Model.updateStudent(studentData);
        } else {
            Model.addStudent(studentData);
        }
        updateStudentList();
    }

    //Funcion que borra el registro de estudiante
    function handleDelete(id) {
        Model.deleteStudent(id);
        updateStudentList();
    }
    //Funcion para editar un registro
    function handleEditRequest(id) {
        const studentToEdit = Model.getStudents().find(s => s.id === id);
        if (studentToEdit) {
            View.fillFormForEdit(studentToEdit);
        }
    }
    //Funcion para buscar 
    function handleFilterChange(searchTerm, statusFilter) {
        updateStudentList(searchTerm, statusFilter);
    }

    return {
        initialize
    };
})(Model, View);