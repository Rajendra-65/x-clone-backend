import express, { json } from "express";

const app = express()

app.listen(5001 , () => console.log("Server is up and running onn port 5001"))

app.use(json)