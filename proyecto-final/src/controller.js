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
        updateProductList();
        const chartData = Model.getChartData();
        View.renderChart(chartData);
    }
    //Funcion para actualizar la lista de la tabla ,segun el filtro seleccionado
    function updateProductList(searchTerm = '', statusFilter = 'all') {
        const filteredProducts = Model.filterProducts(searchTerm, statusFilter);
        View.renderProducts(filteredProducts);
        
    }
    //Funcion que determina si el registro se actualiza o se agrega 
    function handleFormSubmit(productData) {
        if (productData.id) {
            Model.updateProduct(productData);
        } else {
            Model.addProduct(productData);
        }
        updateProductList();
    }

    //Funcion que borra el registro de estudiante
    function handleDelete(id) {
        Model.deleteProduct(id);
        updateProductList();
    }
    //Funcion para editar un registro
    function handleEditRequest(id) {
        const productToEdit = Model.getProducts().find(s => s.id === id);
        if (productToEdit) {
            View.fillFormForEdit(productToEdit);
        }
    }
    //Funcion para buscar 
    function handleFilterChange(searchTerm, statusFilter) {
        updateProductList(searchTerm, statusFilter);
    }


    return {
        initialize
        
    };
})(Model, View);