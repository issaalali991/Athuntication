import pool from '../db/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
 
// import jwt from 'jsonwebtoken';
// const {jwt} = require( 'jsonwebtoken');
export const AuthUserLogin = (req, res,next) => {
  const {user_name,password} = req.body;
  pool.query('SELECT * FROM users WHERE user_name = $1',[user_name],(error,results) => {
    if(error){
      throw error;
    }
    if(results.rows.length > 0){ 
      const user = results.rows[0];
      if(bcrypt.compareSync(password,user.password)){
        const token = jwt.sign({user_id:user.id,user_name:user.user_name},process.env.JWT_SECRET,{expiresIn:'1h'});
      
        next();
       
      }else{
        res.status(401).json({message:'Invalid login credentials from Auth'});
      }
    }else{
      res.status(401).json({message:'Invalid login credentials from Auth'});
    }
  });
}
export const AuthUserRegister = (req, res,next) => {
  const {user_name,password} = req.body;
  pool.query('SELECT * FROM users WHERE user_name = $1',[user_name],(error,results) => {
    if(error){
      throw error;
    }
    if(results.rows.length > 0){ 
      res.status(400).json({message:'User already exists'});
    }else{
      next();
    }
  });
}

