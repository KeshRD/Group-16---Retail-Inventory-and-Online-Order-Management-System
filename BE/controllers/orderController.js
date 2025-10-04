const GenericModel = require("../models/genericModel");
const createController = require("./genericController");

const orderModel = new GenericModel("Order", "order_id");
const orderController = createController(orderModel);

module.exports = orderController;
