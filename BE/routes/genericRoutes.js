const express = require("express");

const createRoutes = (Controller) => {
  const router = express.Router();

  router.get("/", Controller.getAll);
  router.get("/:id", Controller.getById);
  router.post("/", Controller.create);
  router.put("/:id", Controller.update);
  router.delete("/:id", Controller.remove);

  return router;
};

module.exports = createRoutes;

