import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from '../src/db/mongodb.js';

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());
server.get("/", (req, res) => res.send("Testando deploy"));
server.post("/", async (req, res) => {
    try {
        const userTest = req.body;
        await db.collection("users").insertOne({ userTest });
        res.status(200).send("Deploy funcionou!!");
    }
})

const PORT = process.env.PORT;
server.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT));
