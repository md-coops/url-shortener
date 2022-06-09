import { ChangeEvent, useState, FC, Dispatch, SetStateAction } from 'react';
import type { EnryptedURLRecord, MongoRecordDTO } from '../types';
import { recordsToEncriptedURLs } from '../utils/mappers';

type Props = {
  encriptedUrls: EnryptedURLRecord[];
  setEncryptedUrls: Dispatch<SetStateAction<EnryptedURLRecord[]>>;
};

export const UrlForm: FC<Props> = ({ encriptedUrls, setEncryptedUrls }) => {
  const [formValue, setFormValue] = useState<string>('');

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue(event.target.value);
  };

  const HandleFormSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/postNewUrl', {
      method: 'post',
      body: JSON.stringify({ url: formValue }),
    });
    const jsonResponse: MongoRecordDTO = await response.json();

    setEncryptedUrls([
      ...encriptedUrls,
      ...recordsToEncriptedURLs([jsonResponse]),
    ]);
  };

  return (
    <form onSubmit={HandleFormSubmit}>
      <label>
        URL:
        <input type='text' value={formValue} onChange={handleFormChange} />
      </label>
      <input type='submit' value='Generate' />
    </form>
  );
};
