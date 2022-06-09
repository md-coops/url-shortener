import { MongoRecordDTO, DTOtoEntiy, EnryptedURLRecord } from '../types';

export const recordsToEncriptedURLs: DTOtoEntiy<MongoRecordDTO[], EnryptedURLRecord[]> = records => {
  return records.map(record => ({
    encryptedUrl: record.encryptedUrl,
    id: record._id,
  }));
};
