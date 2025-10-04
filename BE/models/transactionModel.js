const GenericModel = require("./genericModel");
const transactionModel = new GenericModel("Transaction", "transaction_id");
module.exports = transactionModel;
