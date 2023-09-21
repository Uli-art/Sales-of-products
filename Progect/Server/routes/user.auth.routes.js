const express = require("express");
const authController = require("../controllers/user.auth.controller");
const authRouter = express.Router();

// authRouter.get("/", authController.GetUserByPhone);
authRouter.get("/:PhoneNumber", authController.GetUserByPhone);
module.exports = authRouter;