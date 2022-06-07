import { Record } from '../types';

export const recordsToEncriptedURLs = (records: Record[]) => {
    return records.map(record => ({
        url: record.encriptedUrl,
        id: record.id,
    }))
};
