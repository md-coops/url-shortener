import { MongoClient } from 'mongodb';

const client = new MongoClient(
  process.env.MONGO_DB_CONNECTION_STRING || ''
);

export const getMongoDBInstance = async () => {
  try {
    await client.connect();
  } catch (error: any) {
    throw new Error(error);
  }
  return client.db(process.env.MONGO_DB_DATABASE);
};
