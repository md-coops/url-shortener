import type { NextApiRequest, NextApiResponse } from 'next';
import { generateEncryptedUrl } from '../../utils/generateEncryptedUrl';
import { getMongoDBInstance } from '../../utils/MongoDBHelpers';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await getMongoDBInstance();

  if (req.method !== 'POST') {
    res.status(500).send(null);
  }

  const encryptedUrl = generateEncryptedUrl();
  
  const recordToBeAdded = {
    encryptedUrl,
    originalUrl: JSON.parse(req.body).url,
  };
  
  try {
    const newMongoDbRecordId =
    await db
      .collection('urls')
      .insertOne(recordToBeAdded);

    res.status(200).send({ ...recordToBeAdded, _id: newMongoDbRecordId.insertedId.toString() });
  } catch (e) {
    res.status(500).send(null);
  }
};

export default handler;
