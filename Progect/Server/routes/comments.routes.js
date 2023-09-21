const express = require("express");
const commentsController = require("../controllers/comments.controller");
const commentsRouter = express.Router();

commentsRouter.get("/", commentsController.getAll);
commentsRouter.post("/", commentsController.createComments);
commentsRouter.delete("/:id", commentsController.deleteComments);

module.exports = commentsRouter;