import db from '../db/mongodb.js';
import joi from 'joi';

export async function adress(req, res) {
  console.log("entrei")
  const adress = req.body;
  const adressSchema = joi.object({
    name: joi.string().required(),
    surname:joi.string().required(),
    cpf:joi.number().positive().integer().max(11).required(),
    cep: joi.number().positive().integer().max(8).required(),
    street: joi.string().min(5).max(15).required(),
    numberHome: joi.number().positive().integer().required(),
    complement:joi.string().max(15),
    district:joi.string().max(29).required(),
    city: joi.string().max(29).required(),
    state: joi.string().max(20).required(),
    cardNumber: joi.number().positive().integer().max(8).required(),
    cardName:joi.string().required(),
    cardvality:number().positive().integer().max(6).required(),
    cardSecnumber: joi.number().positive().integer().max(3).required(),

  });

  const { error } = adressSchema.validate(adress);
  if (error) {
    return res.sendStatus(422);
  }
  
  try {
    await db.collection('paydatas').insertOne({usuario});
    res.status(200).send("Dados cadastrado com sucesso");
  } catch (error) {
    res.status(500).send("Houve um erro ao se conectar ao servidor");
  }
    
    
}