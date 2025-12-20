const Model = (function() {
    //Arreglo de estudiantes
    let students = [];

    //Funcion que iniciliza los datos en el localstorage
    function init() {
        students = StorageService.getStudents();
    }

    //Funcion para agregar un estudiante
    function addStudent(student) {
        student.id = Date.now().toString();
        student.status = student.grade >= 6 ? 'aprobado' : 'reprobado'; // Lógica de negocio
        students.push(student);
        StorageService.saveStudents(students);
    }


    //Funcion que actualiza los datos de los estudiantes 
    function updateStudent(updatedStudent) {
        const index = students.findIndex(s => s.id === updatedStudent.id);
        if (index > -1) {
            updatedStudent.status = updatedStudent.grade >= 6 ? 'aprobado' : 'reprobado';
            students[index] = updatedStudent;
            StorageService.saveStudents(students);
        }
    }

    //Funcion que borra un registro de estudiante
    function deleteStudent(id) {
        students = students.filter(s => s.id !== id);
        StorageService.saveStudents(students);
    }

    //Funcion que devuelve la lista de estudiantes
    function getStudents() {
        return students;
    }

    // Función de filtrado y búsqueda
    function filterStudents(searchTerm, statusFilter) {
        return students.filter(student => {
            const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  student.course.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesStatus = statusFilter === 'all' || student.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }

    return {
        init,
        addStudent,
        updateStudent,
        deleteStudent,
        getStudents,
        filterStudents
    };
})();