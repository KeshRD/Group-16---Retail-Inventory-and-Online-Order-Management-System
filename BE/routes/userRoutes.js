const createRoutes = require("../routes/genericRoutes");
const userController = require("../controllers/userController");

const router = createRoutes(userController);
module.exports = router;
