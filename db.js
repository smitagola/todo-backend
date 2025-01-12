// import pkg from 'pg';
// const { Pool } = pkg;

// const db = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'todo',
//     password: 'password',
//     port: 5432,
// })

// export default db;

import pkg from 'pg';
const { Pool } = pkg;

const db = new Pool({
  connectionString: 'postgresql://crud_app_dnoz_user:mh38AzxnTTZpdE8PuqkIyN0oxzz2SvEE@dpg-ctl2bfbv2p9s738crjmg-a.oregon-postgres.render.com/crud_app_dnoz',
  ssl: {
    rejectUnauthorized: false, // This is typically required for Render
  },
});

export default db;
