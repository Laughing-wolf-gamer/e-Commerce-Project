import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


import { connectToMongo } from './db/connectToDb.js';
import authRouter from './routes/authentication/auth.route.js'
import adminRouter from './routes/admin/admin.route.js'
import shopRoute from './routes/shop/shop.route.js';

dotenv.config()

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization','Cache-Control','Expires','Pragma'],
        credentials: true,
    }
))
app.use(cookieParser());
app.use('/api/auth',authRouter)
app.use('/api/admin',adminRouter)
app.use('/api/shop/products',shopRoute)

connectToMongo().then(()=>{
    app.listen(port,()=> console.log(`Server listening on port ${port}`))
})