const { body } = require("express-validator");

const productValidate = [
    body("Name")
        .exists()
        .withMessage('Field "name" is required...')
        .isLength({min:3, max:100})
        .withMessage('The length of "name" can be between 3 and 100 characters...'),
    body("Description")
        .exists()
        .withMessage('Field "description" is required...')
        .isLength({min: 5, max : 1000})
        .withMessage('The length of field "description" can be between 5 and 1000 characters '),
    body("Price")
        .exists()
        .withMessage('Field "price" is required...')
        .isNumeric()
        .withMessage('The field "price" must be numeric...')
        .isFloat({min:1, max:20000 })
        .withMessage('The field "price" must be between 1.00 and 20,000.00...')
]

module.exports = {
    productValidate
}