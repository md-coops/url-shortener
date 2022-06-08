import type { NextApiRequest, NextApiResponse } from 'next';

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
