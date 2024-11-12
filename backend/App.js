import "dotenv/config";
import express from "express";
import cors from "cors";
import "./database/connection.js";

// Arquivos de rotas
import { userRouter } from "./routes/openRoutes.js";
import { userProtectedRouter } from "./routes/protectedRoutes.js";

const app = express();
const port = process.env.PORT || 3333;

// Middlewares
app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/auth', userRouter);
app.use('/dashboard', userProtectedRouter);

app.use((request, response) => {
    response.status(404).json({ message: "Page not found - 404" });
});

app.listen(port, () => console.log(`Server is running on port ${port} - http://localhost:${port}`));