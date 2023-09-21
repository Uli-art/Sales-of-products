const express = require("express");
const cardsController = require("../controllers/cards.controller");
const cardsRouter = express.Router();

cardsRouter.get("/", cardsController.getAll);
cardsRouter.get("/:userId", cardsController.getById);
cardsRouter.get("/", cardsController.getOne);
cardsRouter.post("/", cardsController.createCards);
cardsRouter.delete("/:id", cardsController.deleteCards);

module.exports = cardsRouter;