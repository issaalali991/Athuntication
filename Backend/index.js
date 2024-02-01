import express from 'express';
import userRouter from './routes/userRouter.js';
import pool from './db/db.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users',userRouter);
app.get('/', (req, res) => {
    res.send('Welcome to the Users API!');
});




app.listen(4000, () => {
    console.log('Server started on port 4000');
});

