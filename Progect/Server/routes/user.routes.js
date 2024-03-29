const express = require("express");
console.log("hert");
const userController = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/", userController.getAll);
userRouter.post("/", userController.createUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;