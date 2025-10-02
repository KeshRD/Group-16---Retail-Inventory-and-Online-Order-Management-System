const GenericModel = require("./genericModel");
const orderItemModel = new GenericModel("OrderItem", "order_item_id");
module.exports = orderItemModel;
