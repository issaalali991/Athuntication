import pg from 'pg';

const { Pool } = pg;
 const pool = new Pool({

  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT || 5432
});

pool.connect((err) =>{
  if(err){
    console.log('connection error',err.stack);
  }
  console.log('connected to the DB');
})
export default pool;
