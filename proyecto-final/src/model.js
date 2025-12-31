const Model = (function() {
    //Arreglo de los productos
    let products = [];

    //Funcion que inicializa los datos en el localstorage
    function init() {
        products = StorageService.getProducts();
    }

    //Funcion para agregar
    function addProduct(product) {
        product.id = Date.now().toString();
        product.status = product.stock > 5 ? 'stock' : product.stock > 0 ? 'limitado' : 'agotado'; // condicional
        products.push(product);
        StorageService.saveProducts(products);
    }


    //Funcion que actualiza los datos
    function updateProduct(updatedProduct) {
        const index = products.findIndex(s => s.id === updatedProduct.id);
        if (index > -1) {
            updatedProduct.status = updatedProduct.stock > 5 ? 'stock' : updatedProduct.stock > 0 ? 'limitado' : 'agotado';
            products[index] = updatedProduct;
            StorageService.saveProducts(products);
        }
    }

    //Funcion para borrar
    function deleteProduct(id) {
        products = products.filter(s => s.id !== id);
        StorageService.saveProducts(products);
    }

    //Funcion que devuelve los productos
    function getProducts() {
        return products;
    }

    // Función de filtrado y búsqueda
    function filterProducts(searchTerm, statusFilter) {
        return products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  product.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesStatus = statusFilter === 'all' || product.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }
    //Funcion para grafico de stock
    function getChartData() {
        const labels = products.map(product => product.name);
        const data = products.map(product => product.stock);
        return { labels, data };
    }

    

    return {
        init,
        addProduct,
        updateProduct,
        deleteProduct,
        getProducts,
        filterProducts,
        getChartData
    };
})();