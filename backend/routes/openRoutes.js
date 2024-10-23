import express from "express";
import userController from "../controller/userController.js";

const userRouter = express.Router();

userRouter
    .route('/user/register')
    .post(userController.postUser);
    
userRouter
    .route('/user/login')
    .post(userController.authUser);

export { userRouter };