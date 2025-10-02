const GenericModel = require("../models/genericModel");
const createController = require("./genericController");

const orderItemModel = new GenericModel("OrderItem", "order_item_id");
const orderItemController = createController(orderItemModel);

module.exports = orderItemController;
