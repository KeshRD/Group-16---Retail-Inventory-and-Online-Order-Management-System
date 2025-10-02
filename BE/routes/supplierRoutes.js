const createRoutes = require("../routes/genericRoutes");
const supplierController = require("../controllers/supplierController");

const router = createRoutes(supplierController);
module.exports = router;
