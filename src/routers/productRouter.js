import { Router } from "express";
import { getProducts, renderProduct } from "../controllers/productControllers.js";

const productRouter = Router();


productRouter.get("/", getProducts);

productRouter.get("/:categoria/:produto", renderProduct);

export default productRouter;
