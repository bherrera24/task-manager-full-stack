// index.js
import express from "express";
import dotenv from "dotenv";
import pool from "./backend/src/config/db.js"; // <-- aquí importas db.js

dotenv.config();

const app = express();
app.use(express.json());

// Ruta de prueba usando la base de datos
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()"); // consulta de prueba
    res.json({ time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error en la base de datos");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
