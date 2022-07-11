import db from "../db/mongodb.js";

export async function postPurchase(req, res) {
  const purchase = req.body;
  const email = req.headers;
  try {
    for (let i = 0; i < purchase.length; i++) {
      let itemPurchased = await db
        .collection("products")
        .findOne({ name: purchase[i].name });
      let inventory = itemPurchased.inventory;
      let newInventory = inventory - purchase[i].quantity;
      await db.collection("products").updateOne(
        { name: purchase[i].name },
        {
          $set: {
            inventory: newInventory,
          },
        }
      );
      await db.collection("purchases").insertOne({
        email: email,
        purchase: purchase,
      });
    }
    res.status(200).send("Compra efetuada com sucesso!");
  } catch {
    res.status(500).send("Erro ao se conectar ao servidor!");
  }
}
