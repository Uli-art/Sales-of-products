const express = require("express");
const favoritesController = require("../controllers/favorites.controller");
const favoritesRouter = express.Router();

favoritesRouter.get("/", favoritesController.getAll);
favoritesRouter.post("/", favoritesController.createFavorites);
favoritesRouter.delete("/:id", favoritesController.deleteFavorites);

module.exports = favoritesRouter;