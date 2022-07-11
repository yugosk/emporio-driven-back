import { Router } from "express";
import { postPurchase } from "../controllers/purchaseController.js";
import {
  userValidation,
  addressValidation,
} from "../middlewares/userValidation.js";

const purchaseRouter = Router();

purchaseRouter.post(
  "/compras",
  userValidation,
  addressValidation,
  postPurchase
);

export default purchaseRouter;
