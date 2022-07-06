import { Router } from "express";
import { getProducts } from "../controllers/productControllers.js";

const productRouter = Router();

productRouter.get("/", getProducts);

export default productRouter;
