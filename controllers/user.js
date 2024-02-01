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
export const userRegister = (req, res) => {
  const {user_name,password} = req.body;
  const hashedPassword = bcrypt.hashSync(password,10);
  
  pool.query('INSERT INTO users (user_name,password) VALUES ($1,$2)',[user_name,hashedPassword],(error,results) => {
    if(error){
      throw error;
    }
    res.status(201).json({message:'User created successfully'});
  });
}