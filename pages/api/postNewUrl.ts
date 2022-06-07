import type { NextApiResponse } from 'next';
import { PostUrlRequest } from '../../types';
import { getMongoDBInstance } from '../../utils/MongoDBHelpers';

const handler = async (req: PostUrlRequest, res: NextApiResponse) => {
  const db = getMongoDBInstance();
  const record = req.body;

  if (req.method !== 'POST') {
    res.status(500);
  }


  try {
    const newRecord = await db.collection('urls').insertOne(record);
    await db.collection('reseveredEncriptedUrls')
    res.status(200).send(newRecord);
  } catch (e) {
    res.status(500).send(null);
  }
};

export default handler;
