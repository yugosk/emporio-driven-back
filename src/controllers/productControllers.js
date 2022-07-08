import db from "../db/mongodb.js";

export async function getProducts(req, res) {
  try {
    const productList = await db.collection("products").find({}).toArray();
    res.status(200).send(productList);
  } catch (error) {
    res.status(500).send("Houve um erro ao se conectar ao servidor");
  }
}


export async function renderProduct(req, res) {
  const name = req.params.name;
  try {
    const productList = await db.collection("products").find({name: name}).toArray();
    res.status(200).send(productList);
  } catch (error) {
    res.status(500).send("Houve um erro ao se conectar ao servidor");
  }
}
