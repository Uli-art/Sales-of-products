const express = require("express");
const productsController = require("../controllers/products.controller");
const productsRouter = express.Router();

productsRouter.get("/", productsController.getAll);
productsRouter.get("/:productId", productsController.getById);
productsRouter.post("/", productsController.createProducts);
productsRouter.delete("/:id", productsController.deleteProducts);

module.exports = productsRouter;