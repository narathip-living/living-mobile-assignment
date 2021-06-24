const express = require("express");
const controller = require("../controllers/" + "store");

const routes = express.Router();

routes
  .get("/", controller.getAll)
  .get("/:id", controller.getOne)
  .post("/", controller.createOne)
  .put("/:id", controller.updateOne)
  .delete("/:id", controller.deleteOne);

module.exports = routes;
