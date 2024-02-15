const product = require("../database/product");

const getAllProducts = () => {
    return product.getAllProducts();
}

const createProduct = (newProduct) => {
    
    return product.createProduct(newProduct);
}

const getSingleProduct = (id) => {
    return product.getSingleProduct(id);
}

const putProduct = (updatedProduct) => {

    return product.putExistingProduct(updatedProduct);
}


const deleteProduct = (id) => {
    return product.deleteProduct(id);
}

const getBySearchString = (searchStr) => {
    return product.getBySearchString(searchStr);
}

 module.exports = {
    getAllProducts,
    createProduct,
    getSingleProduct,
    putProduct,
    deleteProduct,
    getBySearchString
};