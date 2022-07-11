import { Router } from "express";
import {
  getProducts,
  getProductsByCategory,
  renderProduct,
} from "../controllers/productControllers.js";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/categoria/:category", getProductsByCategory);
productRouter.get("/produto/:product", renderProduct);

export default productRouter;
