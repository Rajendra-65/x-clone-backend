import express, { json } from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express()

app.listen(ENV.PORT, () => console.log("Server is up and running onn port 5001"))

connectDB()

app.get("/",(req,res) => res.send("Hello from Server"))

app.use(json)