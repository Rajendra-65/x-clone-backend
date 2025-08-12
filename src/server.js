import express, { json } from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express()

app.listen(ENV.PORT, () => console.log("Server is up and running onn port 5001"))

app.get("/",(req,res) => res.send("Hello from Server"));

const startServer = async () => {
    try{
        await connectDB();
        
    }catch(error) {
        console.log("Failed to server connection",error.message);
        process.exit[1]
    }
}

startServer ();

app.use(json);