import db from "../db/mongodb.js";
import { ObjectId } from "mongodb";

export async function getProducts(req, res) {
  try {
    const productList = await db.collection("products").find({}).toArray();
    res.status(200).send(productList);
  } catch (error) {
    res.status(500).send("Houve um erro ao se conectar ao servidor");
  }
}

export async function getProductsByCategory(req, res) {
  const idCategory = req.params.category;

  if (
    idCategory === "vinho" ||
    idCategory === "cerveja" ||
    idCategory === "destilado" ||
    idCategory === "espumante"
  ) {
    try {
      const productList = await db
        .collection("products")
        .find({ category: idCategory })
        .toArray();
      res.status(200).send(productList);
    } catch (error) {
      res.status(500).send("Houve um erro ao se conectar ao servidor");
    }
  } else {
    res.status(404).send("A categoria buscada não existe!");
    return;
  }
}

export async function renderProduct(req, res) {
  const idProduct = req.params.product;
  const _id = new ObjectId(idProduct);

  try {
    const product = await db.collection("products").find({ _id }).toArray();
    const suggestions = await db
      .collection("products")
      .find({ category: product[0].category })
      .toArray();

    const response = {
      product: product[0],
      suggestions: suggestions.filter((item) => item.name !== product[0].name),
    };
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Houve um erro ao se conectar ao servidor");
    return;
  }
}
