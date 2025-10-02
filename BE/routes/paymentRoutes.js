const createRoutes = require("../routes/genericRoutes");
const paymentController = require("../controllers/paymentController");

const router = createRoutes(paymentController);
module.exports = router;
