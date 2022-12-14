import nextConnect from 'next-connect';
import middleware from '../../database/mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let doc = await req.db.collection('collected-colors').find().toArray();
  console.log(doc);
  res.json(doc);
});

export default handler;
