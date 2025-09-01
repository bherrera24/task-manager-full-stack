import express from "express";
import dotenv from "dotenv";
import "./config/db.js"; // importa la conexión antes de levantar el server

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Task Manager API is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
