const createRoutes = require("../routes/genericRoutes");
const orderController = require("../controllers/orderController");

const router = createRoutes(orderController);
module.exports = router;
