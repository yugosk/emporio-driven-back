import { Router } from "express";
import {
  getProducts,
  getProductsByCategory,
} from "../controllers/productControllers.js";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:category", getProductsByCategory);

export default productRouter;
