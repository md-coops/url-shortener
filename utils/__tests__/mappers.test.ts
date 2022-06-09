import { EnryptedURLRecord, MongoRecordDTO } from '../../types';
import { recordsToEncriptedURLs } from '../mappers';

describe('recrodsToEnciptedURLs', () => {
  const mockMongoDBRecords: MongoRecordDTO[] = [
    { _id: '12345qwert', encryptedUrl: 'some-4fiwn', originalUrl: 'some-url' },
    { _id: '12345qwert', encryptedUrl: 'some-4fiwn', originalUrl: 'some-url' },
  ];
  const mockEncryptedUrlRecords: EnryptedURLRecord[] = [
    { id: '12345qwert', encryptedUrl: 'some-4fiwn' },
    { id: '12345qwert', encryptedUrl: 'some-4fiwn' },
  ];

  it('should convert MogoDB records to state used in the app', () => {
    expect(recordsToEncriptedURLs(mockMongoDBRecords)).toStrictEqual(
      mockEncryptedUrlRecords
    );
  });
});
