const productService = require("../services/productService")
const { validationResult} = require("express-validator");
const { v4: UUID } = require('uuid');


const getProducts =(req,res) =>{
    const allProducts = productService.getAllProducts();
    res. status(200).send({status:"OK", data:allProducts});
};

const createProduct =(req,res,next) =>{
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).send({status:'Error', message: errors.array()})
        }
        
        const {body} = req;
        let newProduct = {
            Id: UUID(),
            CreatedOn : new Date(),
            UpdatedOn : new Date(),
            Name: body.Name,
            Description: body.Description,
            Price: body.Price
        }
        let creationResult = productService.createProduct(newProduct);
        if (!creationResult){
            return res.status(500).send({status:'Error', message:'Error creating new product'})
        }
        res.status(201).send({status:'OK', data: creationResult});

    }catch(err){
        next(err)
    }
};

const updateProduct =(req,res,next) =>{
    try{
        const {body} = req;
        let updatedProduct = {
            Id: body.Id,
            UpdatedOn : new Date(),
            Name: body.Name,
            Description: body.Description,
            Price: body.Price
        }
        let  updateResult = productService.putProduct(updatedProduct);
        if (!updateResult){
            return res.status(500).send({status:'Error', message:'Error updating product empty'})
        }
        res.status(202).send({status:'OK', data: updateResult});
    }catch(err){
        next(err)
    }

};

const getOneProduct =(req,res) =>{
    try {
        let id = req.params.id;
        let searchResult = productService.getSingleProduct(id);
        res.status(201).send({status:'OK', data: searchResult});
        return
    }catch(err){
        next(err)
    }  
};

const deleteProduct =(req,res) =>{
    try {
        let id = req.params.id;
        let deleteResult = productService.deleteProduct(id);
        res.status(202).send({status:'OK', data: deleteResult});
        return
    }catch(err){
        next(err)
    }  
};

const getBySearchString= (req,res) =>{
    let searchStr = req.params.searchStr;
    const searchResults = productService.getBySearchString(searchStr);
    res.status(202).send({status:'OK', data: searchResults});
    
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    getOneProduct,
    deleteProduct,
    getBySearchString
}