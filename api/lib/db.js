// api/lib/db.js
import pg from 'pg';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('neon.tech') ? { rejectUnauthorized: false } : undefined
});

export async function query(text, params){
  const client = await pool.connect();
  try { return await client.query(text, params); }
  finally { client.release(); }
}
