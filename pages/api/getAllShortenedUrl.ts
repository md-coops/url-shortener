import type { NextApiRequest, NextApiResponse } from 'next';
import { esablishMongoConnection } from '../../utils/connectMongoDB';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await esablishMongoConnection();

  try {
    const doc = await db
      .collection('urls')
      .findOne({ originalUrl: 'https://www.google.co.uk' });
    if (doc) {
      res.status(200).send(doc);
    } else {
      res.status(404).send(null);
    }
  } catch (e) {
    res.status(500).send(null)
  }
};

export default handler;
