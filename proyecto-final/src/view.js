const View = (function() {
    const productListEl = document.getElementById('productList');
    const productForm = document.getElementById('productForm');
    const productIdInput = document.getElementById('productId');
    const nameInput = document.getElementById('name');
    const precioInput = document.getElementById('precio');
    const descripcionInput = document.getElementById('descripcion');
    const stockInput = document.getElementById('stock');
    const formSubmitBtn = document.getElementById('formSubmitBtn');
    const searchInput = document.getElementById('searchInput');
    const statusFilter = document.getElementById('statusFilter');
   
   //Funcion para mostrar los productos en la tabla
    function renderProducts(products) {
        productListEl.innerHTML = '';
        products.forEach(product => {
            const tr = document.createElement('tr');
            tr.classList.add('product-item', product.status);
            tr.innerHTML = `
                <td>${product.name} </td>
                <td>${product.precio}</td>
                <td>${product.descripcion}</td>
                <td>${product.stock}</td>
                <td colspan="2" class="student-actions">
                    <button class="edit-btn btn-form btn-list" data-id="${product.id}">Editar</button>
                    <button class="delete-btn btn-form btn-list" data-id="${product.id}">Eliminar</button>
                </td>
            `;
            productListEl.appendChild(tr);
        });
    }

    function setupEventListeners(handlers) {
        // Manejador para agregar/editar en formulario
        productForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const productData = {
                id: productIdInput.value,
                name: nameInput.value,
                precio: precioInput.value,
                descripcion: descripcionInput.value,
                stock: stockInput.value
                
            };
            handlers.handleFormSubmit(productData);
            clearForm();
        });

        // Manejador para eliminar y editar
        productListEl.addEventListener('click', (e) => {
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
    function fillFormForEdit(product) {
        productIdInput.value = product.id;
        nameInput.value = product.name;
        precioInput.value = product.precio;
        descripcionInput.value = product.descripcion;
        stockInput.value = product.stock;
        formSubmitBtn.textContent = 'Guardar Cambios';
    }
    //Funcion para limpiar el form
    function clearForm() {
        productIdInput.value = '';
        productForm.reset();
        formSubmitBtn.textContent = 'Agregar';
    }

    function renderChart(chartData) {
        const ctx = document.getElementById('productsChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar', // Tipo de gráfico de barras
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Cantidad de Productos',
                    data: chartData.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true // Inicia el eje Y en cero
                    }
                }
            }
        });
    }

    return {
        renderProducts,
        setupEventListeners,
        fillFormForEdit,
        clearForm,
        renderChart
    };
})();