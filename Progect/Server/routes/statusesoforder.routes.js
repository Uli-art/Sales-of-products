const express = require("express");
const statusesoforderController = require("../controllers/statusesoforder.controller");
const statusesoforderRouter = express.Router();

statusesoforderRouter.get("/", statusesoforderController.getAll);
statusesoforderRouter.post("/", statusesoforderController.createStatusesoforder);
statusesoforderRouter.delete("/:id", statusesoforderController.deleteStatusesoforder);

module.exports = statusesoforderRouter;