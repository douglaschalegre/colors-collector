import nextConnect from 'next-connect';
import middleware from '../../database/mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  let data = req.body;
  await req.db
    .collection('collected-colors')
    .insertOne({ r: data.r, g: data.g, b: data.b, answer: data.answer });

  res.json({ message: 'ok' });
});

export default handler;
