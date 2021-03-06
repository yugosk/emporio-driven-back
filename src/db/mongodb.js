import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let db = null;

const mongoClient = new MongoClient(process.env.MONGO_URL);

try {
  await mongoClient.connect();
  db = mongoClient.db(process.env.MONGO_DATABASE);
} catch (error) {
  console.error("Ocorreu um erro ao conectar ao banco de dados");
}

export default db;
