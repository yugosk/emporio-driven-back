import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import authRouter from "./routers/authRouter.js";
import adressRouter from "./routers/adresssRouter.js";
import purchaseRouter from "./routers/purchaseRouter.js";
dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use(productRouter);
server.use(authRouter);
server.use(adressRouter);
server.use(purchaseRouter);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT));
