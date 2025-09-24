import express from "express";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(express.json());
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})