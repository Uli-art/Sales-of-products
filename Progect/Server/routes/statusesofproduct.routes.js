const express = require("express");
const statusesofproductController = require("../controllers/statusesofproduct.controller");
const statusesofproductRouter = express.Router();

statusesofproductRouter.get("/", statusesofproductController.getAll);
statusesofproductRouter.post("/", statusesofproductController.createStatusesofproduct);
statusesofproductRouter.delete("/:id", statusesofproductController.deleteStatusesofproduct);

module.exports = statusesofproductRouter;