import express, { Router } from "express";
import * as userController from "./../controllers/user.controller";

const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUserDetails);
router.post("/user", userController.Register);

export default router;
