import type { NextApiRequest } from 'next';

export type MongoRecordDTO = {
  _id: string;
  originalUrl: string;
  encryptedUrl: string;
};

export type EnriptedURLRecord = {
  id: string;
  encryptedUrl: string;
};

export type DTOtoEntiy<DTO, Entity> = (dto: DTO) => Entity;

export interface PostUrlRequest extends NextApiRequest {
  body: { url: string };
}
