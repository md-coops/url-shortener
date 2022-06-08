import type { NextApiRequest, NextApiResponse } from 'next';
import { getMongoDBInstance } from '../../utils/MongoDBHelpers';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const db = await getMongoDBInstance();

  try {
    const doc = await db.collection('urls').find();
    const result = await doc.toArray();

    if (result.length !== 0) {
      res.status(200).send(result);
    } else {
      res.status(404).send([]);
    }
  } catch (e) {
    res.status(500).send(null);
  }
};

export default handler;
