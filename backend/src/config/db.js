import 'dotenv/config';
import pkg from "pg";
const { Pool } = pkg;
console.log('DATABASE_URL:', process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Test rápido al arrancar
pool.connect()
  .then(() => console.log("✅ Connected to Supabase Postgres"))
  .catch(err => console.error("❌ DB connection error:", err));

export default pool;
