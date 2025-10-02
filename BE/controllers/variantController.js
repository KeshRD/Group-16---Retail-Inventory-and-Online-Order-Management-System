const GenericModel = require("../models/genericModel");
const createController = require("./genericController");

const variantModel = new GenericModel("Variant", "variant_id");
const variantController = createController(variantModel);

module.exports = variantController;
