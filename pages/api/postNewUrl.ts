import type { NextApiRequest, NextApiResponse } from 'next';
import { getMongoDBInstance } from '../../utils/MongoDBHelpers';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = getMongoDBInstance();

  if (req.method !== 'POST') {
    res.status(500)
  }

  try {
    const doc = await db.collection('urls').find({ p: 2 });
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
