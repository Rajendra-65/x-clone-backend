import express, { json } from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import {clerkMiddleware} from "@clerk/express"
import userRoutes from "./routes/user.route.js";

const app = express()

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());

app.listen(ENV.PORT, () => console.log("Server is up and running onn port 5001"))

app.get("/",(req,res) => res.send("Hello from Server"));

app.use("/api/user",userRoutes)

const startServer = async () => {
    try{
        await connectDB();
        
    }catch(error) {
        console.log("Failed to server connection",error.message);
        process.exit[1]
    }
}

startServer ();

