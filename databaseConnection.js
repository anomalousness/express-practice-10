import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'pablojoyce',
  host: 'localhost',
  database: 'generic',
  password: '',
  port: 5432,
});

export default pool;


