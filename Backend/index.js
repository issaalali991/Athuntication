import express from 'express';
import userRouter from './routes/userRouter.js';
import pool from './db/db.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/users',userRouter);




app.listen(4000, () => {
    console.log('Server started on port 4000');
});

