import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import db from "../db/mongodb.js";
import joi from "joi";

export async function createUser(req, res) {
  console.log("entrei");
  const usuario = req.body;
  const usuarioSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(5).max(15).required(),
    password_confirmation: joi.any().valid(joi.ref("password")).required(),
  });
  const { error } = usuarioSchema.validate(usuario);
  if (error) {
    return res.sendStatus(422);
  }

  const checksemail = await db
    .collection("usuarios")
    .findOne({ email: usuario.email });
  const checksname = await db
    .collection("usuarios")
    .findOne({ name: usuario.name });

  if (!checksemail) {
    const senhaCriptografada = bcrypt.hashSync(usuario.password, 10);

    await db
      .collection("usuarios")
      .insertOne({
        name: usuario.name,
        email: usuario.email,
        password: senhaCriptografada,
      });
    res.status(201).send("Usuário criado com sucesso");
  } else {
    return res.status(401).send("Usuario ou email já cadastrados!");
  }
}

export async function loginUser(req, res) {
  const usuario = req.body;
  const usuarioSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  const { error } = usuarioSchema.validate(usuario);
  if (error) {
    return res.sendStatus(422);
  }
  const user = await db
    .collection("usuarios")
    .findOne({ email: usuario.email });

  if (user && bcrypt.compareSync(usuario.password, user.password)) {
    const token = uuid();
    await db.collection("sessoes").insertOne({
      token,
      userId: user._id,
    });
    return res.status(201).send({ token, name: user.name, email: user.email });
  } else {
    return res.status(401).send("Senha ou email incorretos!");
  }
}
