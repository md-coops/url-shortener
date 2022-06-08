import { MongoClient } from 'mongodb';

const client = new MongoClient(
  'mongodb+srv://morgan_cooper:Fiest%402015@cluster0.sq1n6.mongodb.net/?retryWrites=true&w=majority'
  // 'mongodb://morgan:1234@0.0.0.0:3333/'
);

export const getMongoDBInstance = async () => {
  try {
    await client.connect();
  } catch (error: any) {
    throw new Error(error);
  }

  return client.db('MorganDB');
};
