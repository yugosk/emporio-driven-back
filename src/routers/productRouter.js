import { Router } from "express";
import { getProducts, renderProduct } from "../controllers/productControllers.js";

const productRouter = Router();


productRouter.get("/", getProducts);

productRouter.get("/produto/:name", renderProduct);

export default productRouter;
