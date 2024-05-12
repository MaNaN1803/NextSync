import mongoose from "mongoose";
import {User} from "../models/user"


export const connectdb = async()=>{

    try {
        const {connection}= await mongoose.connect(process.env.MONGO_DB,{
            dbName:"Nextsync"
        });




        console.log(`MongoDB connected : ${connection.host}`);

        const user = new User ({
            name: "test",
            email: "test@gmail.com",
            password: "test"
        })
        await user.save();
        console.log("user created succesfully")

    }
    catch (error) {
        console.log("failed to connect to db");
        console.log(error);
        
    }
    
}