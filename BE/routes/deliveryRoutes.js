const createRoutes = require("../routes/genericRoutes");
const deliveryController = require("../controllers/deliveryController");

const router = createRoutes(deliveryController);
module.exports = router;
