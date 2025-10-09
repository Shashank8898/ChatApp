dotenv.config();

import express from 'express';
import dotenv from "dotenv";

import {connectDB} from "../lib/db.js"
//Importing Routes
import authRoutes from "../routes/auth.route.js"
//Importing Enviroment variables
const PORT = process.env.PORT;

const app = express()

app.use(express.json())                             //A middleware that allows us to extract data from req.body

//Authorization Route
app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`Backend is online on port ${PORT}`)
    connectDB;
}) 