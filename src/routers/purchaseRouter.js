import { Router } from "express";

const purchaseRouter = Router();

purchaseRouter.post("/compras", postPurchase);

export default purchaseRouter;
