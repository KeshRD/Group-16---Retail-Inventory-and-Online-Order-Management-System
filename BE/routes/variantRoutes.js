const createRoutes = require("../routes/genericRoutes");
const variantController = require("../controllers/variantController");

const router = createRoutes(variantController);
module.exports = router;
