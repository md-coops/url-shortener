import { MongoRecordDTO, DTOtoEntiy, EnriptedURLRecord } from '../types';

export const recordsToEncriptedURLs: DTOtoEntiy<MongoRecordDTO[], EnriptedURLRecord[]> = records => {
  return records.map(record => ({
    encryptedUrl: record.encryptedUrl,
    id: record._id,
  }));
};
