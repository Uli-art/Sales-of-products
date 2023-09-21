const express = require("express");
const sellersController = require("../controllers/sellers.controller");
const sellersRouter = express.Router();

sellersRouter.get("/", sellersController.getAll);
sellersRouter.post("/", sellersController.createSellers);
sellersRouter.delete("/:id", sellersController.deleteSellers);

module.exports = sellersRouter;