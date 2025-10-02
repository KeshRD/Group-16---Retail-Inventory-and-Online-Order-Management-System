const createRoutes = require("../routes/genericRoutes");
const categoryController = require("../controllers/categoryController");

const router = createRoutes(categoryController);
module.exports = router;
