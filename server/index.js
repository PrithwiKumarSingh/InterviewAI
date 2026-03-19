import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';
import userRouter from './routes/user.route.js';
import interviewRouter from './routes/interview.route.js';
dotenv.config();

const app = express(); 

 
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}));



app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview", interviewRouter);


connectDB().
then(()=>{
    app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
}).catch((error)=>{
    console.log("Error connecting to the database", error);
})

