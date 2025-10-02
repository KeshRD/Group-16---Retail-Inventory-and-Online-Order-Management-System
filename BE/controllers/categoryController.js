const GenericModel = require("../models/genericModel");
const createController = require("./genericController");

const categoryModel = new GenericModel("Category", "category_id");
const categoryController = createController(categoryModel);

module.exports = categoryController;
