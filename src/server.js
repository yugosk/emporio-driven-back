import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use(productRouter);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT));
