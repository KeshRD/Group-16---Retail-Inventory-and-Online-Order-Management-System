const GenericModel = require("../models/genericModel");
const createController = require("./genericController");

const transactionModel = new GenericModel("Transaction", "transaction_id");
const transactionController = createController(transactionModel);

module.exports = transactionController;
