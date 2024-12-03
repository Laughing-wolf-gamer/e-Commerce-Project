import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


import { connectToMongo } from './db/connectToDb.js';

dotenv.config()

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization','Cache-Control','Expires','Pragma'],
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        credentials: true,
    }
))
app.use(cookieParser());

connectToMongo().then(()=>{
    app.listen(port,()=> console.log(`Server listening on port ${port}`))
})