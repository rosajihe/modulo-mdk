const StorageService = (function() {
    const PRODUCTS_KEY = 'products';

    function getProducts() {
        const products = localStorage.getItem(PRODUCTS_KEY);
        return products ? JSON.parse(products) : [];
    }

    function saveProducts(products) {
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
    }

    return {
        getProducts,
        saveProducts
    };
})();