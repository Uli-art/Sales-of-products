const express = require("express");
const productController = require("../controllers/products.add.controller");
const productRouter = express.Router();

// authRouter.get("/", authController.GetUserByPhone);
productRouter.get("/:Name", productController.GetProductByName);
module.exports = productRouter;