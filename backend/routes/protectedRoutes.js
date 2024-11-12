import express from "express";
import userController from "../controller/userController.js";
import authenticateToken from '../middlewares/authenticateToken.js';

const userProtectedRouter = express.Router();

userProtectedRouter
    .get('/protected', authenticateToken, (req, res) => {
        res.status(200).json({ message: `This is a protected route for user ${req.user}` });
    });

userProtectedRouter
    .route('/protected/userPost')
    .post(authenticateToken, userController.postUser)

userProtectedRouter
    .route('/protected/users')
    .get(authenticateToken, userController.getUsers)

userProtectedRouter
    .route('/protected/user/:id')
    .get(authenticateToken, userController.getOneUser)

userProtectedRouter
    .route('/protected/userUpdate/:id')
    .put(authenticateToken, userController.updateUser)

userProtectedRouter
    .route('/protected/userDelete/:id')
    .delete(authenticateToken, userController.deleteUser)

export { userProtectedRouter };