import pkg from 'pg';
const { Pool } = pkg;

const db = new Pool({
  connectionString: 'postgresql://postgres:QjbbbGMU2IVfqOH0@db.pmrzzfsgeajjcohqmesg.supabase.co:5432/postgres',
  ssl: false,
});

export default db;