import pool from '../db/db.js';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';
	
export const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}
export const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

  
export const userRegister = async (req, res) => {
  const {user_name,password} = req.body;
  const hashedPassword = bcrypt.hashSync(password,10);
   
  
  pool.query('INSERT INTO users (user_name,password) VALUES ($1,$2)',[user_name,hashedPassword],(error,results) => {
    if(error){
      throw error;
    }
    res.status(201).json({message:'User created successfully'});
  });
}

export const userLogin = (req, res) => {
  const {user_name,password} = req.body;
  pool.query('SELECT * FROM users WHERE user_name = $1',[user_name],(error,results) => {
    if(error){
      throw error;
    }
    if(results.rows.length > 0){ 
      const user = results.rows[0];
      if(bcrypt.compareSync(password,user.password)){
        const token = jwt.sign({user_id:user.id,user_name:user.user_name},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({token,id:user.id});
      }else{
        res.status(401).json({message:'Invalid login credentials from userLogin 1'});
      }
    }else{
      res.status(401).json({message:'Invalid login credentials from userLogin 2'});
    }
  });
}