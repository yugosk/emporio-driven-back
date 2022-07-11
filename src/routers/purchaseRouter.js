import { Router } from "express";
import { postPurchase } from "../controllers/purchaseController.js";

const purchaseRouter = Router();

purchaseRouter.post("/compras", postPurchase);

export default purchaseRouter;
