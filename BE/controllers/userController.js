const GenericModel = require("../models/genericModel");
const createController = require("./genericController");

const userModel = new GenericModel("User", "user_id");
const userController = createController(userModel);

module.exports = userController;
