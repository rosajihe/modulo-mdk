
const API_BASE = "http://localhost:3000/estudiantes";
const tbody = document.getElementById("tbodyE");
const listStatus = document.getElementById("listStatus");

function renderTable(list) {
    if (!list.length) {
        tbody.innerHTML = `<tr><td colspan="4">No hay registro.</td></tr>`;
        return;
    }
    //console.log(list)

    tbody.innerHTML = list
        .map(
            p => `
      <tr data-id="${p.id}">
        <td>${p.id}</td>
        <td>${p.nombre}</td>
        <td>${p.grado}</td>
        
      </tr>`
        )
        .join("");
}

// LISTAR
async function load() {
    listStatus.textContent = "Cargando…";

    const res = await fetch(API_BASE + "/estudiantes");
    const data = await res.json();

    renderTable(data);
    listStatus.textContent = "Lista de los estudiantes inscritos";
}


load();
