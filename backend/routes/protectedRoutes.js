import express from "express";
import investimentController from "../controller/investmentController.js";
import authenticateToken from '../middlewares/authenticateToken.js';

const investimentRouter = express.Router();

investimentRouter
    .get('/protected', authenticateToken, (req, res) => {
        res.status(200).json({ message: `This is a protected route for user ${req.user}` });
    });

investimentRouter
    .route('/protected/investiment')
    .get(authenticateToken, investimentController.getInvestiment)  // Substitua por seu método do controller

export { investimentRouter };