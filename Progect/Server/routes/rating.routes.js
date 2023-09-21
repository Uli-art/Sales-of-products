const express = require("express");
const ratingController = require("../controllers/rating.controller");
const ratingRouter = express.Router();

ratingRouter.get("/", ratingController.getAll);
ratingRouter.post("/", ratingController.createRating);
ratingRouter.delete("/:id", ratingController.deleteRating);

module.exports = ratingRouter;