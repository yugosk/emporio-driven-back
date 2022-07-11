import db from "../db/mongodb.js";
import joi from "joi";

export async function adress(req, res) {
  console.log("entrei");
  const adress = req.body;
  const adressSchema = joi.object({
    name: joi.string().required(),
    surname: joi.string().required(),
    cpf: joi
      .string()
      .length(11)
      .pattern(/^[0-9]+$/)
      .required(),
    cep: joi
      .string()
      .length(8)
      .pattern(/^[0-9]+$/)
      .required(),
    street: joi.string().min(5).max(15).required(),
    numberHome: joi
      .string()
      .pattern(/^[0-9]+$/)
      .required(),
    complement: joi.string().max(15),
    district: joi.string().max(29).required(),
    city: joi.string().max(29).required(),
    state: joi.string().max(20).required(),
    cardNumber: joi
      .string()
      .length(16)
      .pattern(/^[0-9]+$/)
      .required(),
    cardName: joi.string().required(),
    cardvality: joi
      .string()
      .length(6)
      .pattern(/^[0-9]+$/)
      .required(),
    cardSecnumber: joi
      .string()
      .length(3)
      .pattern(/^[0-9]+$/)
      .required(),
  });

  const { error } = adressSchema.validate(adress);
  if (error) {
    return res.status(422).send(error);
  }

  try {
    await db.collection("paydatas").insertOne({ adress });
    res.status(200).send("Dados cadastrados com sucesso");
  } catch (error) {
    res.status(500).send("aqui q deu erro?");
  }
}
