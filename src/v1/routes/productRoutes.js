const express = require('express');
const router = express.Router();
const productController = require("../../controllers/productController")
const { productValidate } = require("../../middlewares/productValidator")

router
    .get("/", productController.getProducts)
    .get("/:id",productController.getOneProduct)
    .get("/search/:searchStr",productController.getBySearchString)
    .post("/", productValidate,productController.createProduct)
    .delete("/:id", productController.deleteProduct)
    .put("/", productController.updateProduct)

module.exports = router