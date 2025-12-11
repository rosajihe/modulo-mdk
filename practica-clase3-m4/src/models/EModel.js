let estudiantes = [
    { "id": 1, 
      "nombre": "Ana",
      "grado": "A" 
    },
    { "id": 2, 
      "nombre": "Luis",
      "grado": "B" 
    },
    { "id": 3, 
      "nombre": "Roberto",
      "grado": "C" 
    }
    
]


function getAll() {
    return estudiantes;
}


module.exports = { getAll }