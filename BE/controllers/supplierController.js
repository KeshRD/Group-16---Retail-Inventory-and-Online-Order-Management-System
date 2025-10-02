const GenericModel = require("../models/genericModel");
const createController = require("./genericController");

const supplierModel = new GenericModel("Supplier", "supplier_id");
const supplierController = createController(supplierModel);

module.exports = supplierController;
