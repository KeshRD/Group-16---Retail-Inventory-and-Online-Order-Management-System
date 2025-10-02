const GenericModel = require("../models/genericModel");
const createController = require("./genericController");

const reportModel = new GenericModel("Report", "report_id");
const reportController = createController(reportModel);

module.exports = reportController;
