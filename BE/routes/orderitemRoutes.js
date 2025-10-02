const createRoutes = require("../routes/genericRoutes");
const orderItemController = require("../controllers/orderItemController");

const router = createRoutes(orderItemController);
module.exports = router;
