

import mongoose from "mongoose";


export const connectToMongo =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(`Error connecting to Mongo: ${error.message}`);
        process.exit(1);
    }
}