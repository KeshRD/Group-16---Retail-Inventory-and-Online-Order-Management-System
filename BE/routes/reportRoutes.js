const createRoutes = require("../routes/genericRoutes");
const reportController = require("../controllers/reportController");

const router = createRoutes(reportController);
module.exports = router;
