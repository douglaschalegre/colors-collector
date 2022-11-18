import { Db, MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

if (!process.env.MONGODB_URI) {
  throw 'Insira a string de conexão com o mongodb!';
}
const client = new MongoClient(process.env.MONGODB_URI);

async function database(
  req: { dbClient: MongoClient; db: Db },
  res: any,
  next: () => any
) {
  try {
    await client.connect();
    req.dbClient = client;
    req.db = client.db('colors');
    return next();
  } catch (error) {
    return error;
  }
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
