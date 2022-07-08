import db from "../db/mongodb.js";

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
