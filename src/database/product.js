const FS = require('fs');
const DB = JSON.parse(FS.readFileSync("src/database/db.json",{encoding:'utf-8', flag: 'r'}));
const { saveToDB } = require("./utils")


const getAllProducts = () =>{
    return DB;
}

const createProduct = (newProduct) =>{
    const productExists = DB.findIndex((item) => item.Name === newProduct.Name) > -1
    if (productExists){
      return;
    }

    DB.push(newProduct);
    saveToDB(DB);
    return newProduct;
}

const getSingleProduct = (id) => {
    return DB.find((item) => item.Id === id );
}

const putExistingProduct = (updatedProduct) =>{
 
        let index = DB.findIndex((item) => item.Id === updatedProduct.Id);
        if (index === -1){
            return;
        }
        DB[index] = updatedProduct;
        saveToDB(DB);
        return updatedProduct;
}

const deleteProduct = (id) =>{
    let index = DB.findIndex((item) => item.Id === id);
    if (index === -1){
        return;
    }
    let deletedProduct = DB[index];
    DB.splice(index,1);
    saveToDB(DB);
    return deletedProduct;
}

const getBySearchString = (searchStr) =>{
    return DB.filter((item) => item.Name.toUpperCase().includes(searchStr.toUpperCase()) || item.Description.toUpperCase().includes(searchStr.toUpperCase()) )
}


module.exports ={
    getAllProducts,
    createProduct,
    getSingleProduct,
    putExistingProduct,
    deleteProduct,
    getBySearchString

}