import mongoose from "mongoose";
import { config } from "./config/config";


const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('connected to database sucessfully');
        });
        mongoose.connection.on('error', () => {
            console.log('Error in connecting to databse');
        });
        await mongoose.connect(config.databseUrl as string);
    }
    catch (err) {
        console.log('Failed to connect to database', err);
        process.exit(1);
    }
};

export default connectDB;