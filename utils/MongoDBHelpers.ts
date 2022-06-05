import { MongoClient } from 'mongodb';

const client = new MongoClient(
  'mongodb+srv://morgan_cooper:Fiest%402015@cluster0.sq1n6.mongodb.net/?retryWrites=true&w=majority'
);

export const esablishMongoConnection = async () => {
  try {
    await client.connect();
  } catch {
    throw new Error('could not connect to MonogDB');
  }

  return client.db('MorganDB');
};

export const getMongoDBInstance = () => client.db('MorganDB');
