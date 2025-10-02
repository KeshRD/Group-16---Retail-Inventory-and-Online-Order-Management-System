const createRoutes = require("../routes/genericRoutes");
const transactionController = require("../controllers/transactionController");

const router = createRoutes(transactionController);
module.exports = router;
