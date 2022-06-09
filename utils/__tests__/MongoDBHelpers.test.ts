import { getMongoDBInstance } from '../MongoDBHelpers';

jest.mock('mongodb', () => ({
  MongoClient: function () {
    this.connect = () => mockConnect();
    this.db = () => mockDb('MorganDB');
  },
} as any));

const mockConnect = jest.fn();
const mockDb = jest.fn();

describe('getMongoDbInstance', () => {
  it('should call connect and db when called', async () => {
    await getMongoDBInstance();

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(mockDb).toBeCalledTimes(1);
    expect(mockDb).toHaveBeenCalledWith('MorganDB');
  });
});
