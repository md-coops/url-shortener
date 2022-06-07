import type { NextApiRequest } from 'next';

export type Record = {
  id: string;
  originalUrl: string;
  encriptedUrl: string;
};

export interface PostUrlRequest extends NextApiRequest {
  body: { url: string, dateCreated: Date };
}
