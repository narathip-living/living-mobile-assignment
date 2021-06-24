const express = require("express");
const controller = require("../controllers/dev");

const routes = express.Router();

routes.get("/config", controller.getConfig);
routes.get("/version", controller.getVersion);
routes.get("/seq", controller.seq); //test sequelize connection

module.exports = routes;
