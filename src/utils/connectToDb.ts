import mongoose from "mongoose"
import { getEnvVars } from "./getEnvVars"
export const connectToDb = ()=>{
    return mongoose.connect(getEnvVars('MONGO_URI'))
}