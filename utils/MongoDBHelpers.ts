import { MongoClient } from 'mongodb';

const client = new MongoClient(
  // 'mongodb+srv://morgan_cooper:Fiest%402015@cluster0.sq1n6.mongodb.net/?retryWrites=true&w=majority'
  'mongodb://morgan:1234@0.0.0.0:3333/'
);

export const esablishMongoConnection = async () => {
  try {
    await client.connect();
  } catch (e: any) {
    throw new Error(e);
  }
console.log('connection established succesfully');
  return client.db('MorganDB');
};

export const getMongoDBInstance = () => client.db('MorganDB');
