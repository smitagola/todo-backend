import pkg from 'pg';
const { Pool } = pkg;

const db = new Pool({
  connectionString: 'postgresql://postgres:SMIT@agola1208@db.pmrzzfsgeajjcohqmesg.supabase.co:5432/postgres',
  ssl: {
    rejectUnauthorized: false, // Required for Supabase connections
  },
});

export default db;