const GenericModel = require("../models/genericModel");
const createController = require("./genericController");

const productModel = new GenericModel("Product", "product_id");
const productController = createController(productModel);

module.exports = productController;
