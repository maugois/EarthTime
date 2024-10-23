import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

app.use((request, response) => {
    response.status(404).json({ message: "Page not found - 404" });
});

app.listen(port, () => console.log(`Server is running on port ${port} - http://localhost:${port}`));