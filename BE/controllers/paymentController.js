const GenericModel = require("../models/genericModel");
const createController = require("./genericController");

const paymentModel = new GenericModel("Payment", "payment_id");
const paymentController = createController(paymentModel);

module.exports = paymentController;
