import express from "express";
import userController from "../controller/userController.js";

const userRouter = express.Router();
    
userRouter
    .route('/user/login')
    .post(userController.authUser);

userRouter
    .route('/user/logout')
    .post(userController.authUser);

// Apenas teste para o crud sem autenticacao
userRouter
    .route('/user/userPost')
    .post(userController.postUser)

userRouter
    .route('/user/users')
    .get(userController.getUsers)

userRouter
    .route('/user/getOne/:id')
    .get(userController.getOneUser)

userRouter
    .route('/user/userUpdate/:id')
    .put(userController.updateUser)

userRouter
    .route('/user/userDelete/:id')
    .delete(userController.deleteUser)

export { userRouter };