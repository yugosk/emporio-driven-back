import { Router } from "express";
import {
  getProducts,
  getProductsByCategory,
  renderProduct,
} from "../controllers/productControllers.js";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:category", getProductsByCategory);
productRouter.get("/:categoria/:produto", renderProduct);

export default productRouter;
