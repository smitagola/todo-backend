import pkg from 'pg';
const { Pool } = pkg;

const db = new Pool({
  connectionString: 'postgresql://postgres.pmrzzfsgeajjcohqmesg:QjbbbGMU2IVfqOH0@aws-0-ap-south-1.pooler.supabase.com:6543/postgres',
  ssl: {
    rejectUnauthorized: false,
  },
});

export default db;