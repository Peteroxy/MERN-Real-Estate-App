import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to Mongodb')
}).catch((err) => {
    console.log(err)
})

const app = express();


app.listen(3000, () => {
    console.log('app started on port 3000')
});

app.use('/api/user', userRouter);