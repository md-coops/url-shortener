import { ChangeEvent, useState, FC, Dispatch, SetStateAction } from 'react';
import type { EnriptedURLRecord, MongoRecordDTO } from '../types';
import { recordsToEncriptedURLs } from '../utils/mappers';

type Props = {
  encriptedUrls: EnriptedURLRecord[];
  setEncryptedUrls: Dispatch<SetStateAction<EnriptedURLRecord[]>>;
};

export const UrlForm: FC<Props> = ({ encriptedUrls, setEncryptedUrls }) => {
  const [FormValue, setFormValue] = useState<string>('');

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue(event.target.value);
  };

  const HandleFormSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/postNewUrl', {
      method: 'post',
      body: JSON.stringify({ url: 'value' }),
    });
    const jsonResponse: MongoRecordDTO = await response.json();
    
    console.log(recordsToEncriptedURLs([jsonResponse]));

    setEncryptedUrls([
      ...encriptedUrls,
      ...recordsToEncriptedURLs([jsonResponse]),
    ]);
  };

  return (
    <form onSubmit={HandleFormSubmit}>
      <label>
        URL:
        <input type='text' value={FormValue} onChange={handleFormChange} />
      </label>
      <input type='submit' value='Generate' />
    </form>
  );
};
