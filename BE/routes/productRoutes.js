const createRoutes = require("../routes/genericRoutes");
const productController = require("../controllers/productController");

const router = createRoutes(productController);
module.exports = router;
