const GenericModel = require("../models/genericModel");
const createController = require("./genericController");

const deliveryModel = new GenericModel("Delivery", "delivery_id");
const deliveryController = createController(deliveryModel);

module.exports = deliveryController;
