const StorageService = (function() {
    const STUDENTS_KEY = 'students';

    function getStudents() {
        const students = localStorage.getItem(STUDENTS_KEY);
        return students ? JSON.parse(students) : [];
    }

    function saveStudents(students) {
        localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
    }

    return {
        getStudents,
        saveStudents
    };
})();