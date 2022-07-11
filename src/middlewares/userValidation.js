import db from "../db/mongodb.js";

export async function userValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    return res.sendStatus(422);
  }

  const session = await db.collection("sessoes").findOne({ token });
  if (!session) {
    return res.sendStatus(404);
  }
  next();
}

export async function addressValidation(req, res, next) {
  const { cpf } = req.headers;
  const addressData = await db
    .collection("paydatas")
    .findOne({ adress: { cpf: cpf } });
  if (!addressData) {
    return res
      .status(404)
      .send("As informações de pagamento não foram encontradas!");
  }
  next();
}
