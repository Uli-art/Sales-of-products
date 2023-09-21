const express = require("express");
const categoriesController = require("../controllers/categories.controller");
const categoriesRouter = express.Router();

categoriesRouter.get("/", categoriesController.getAll);
categoriesRouter.post("/", categoriesController.createCategories);
categoriesRouter.delete("/:id", categoriesController.deleteCategories);

module.exports = categoriesRouter;