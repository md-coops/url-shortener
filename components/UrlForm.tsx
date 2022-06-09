import { ChangeEvent, useState, FC, Dispatch, SetStateAction } from 'react';
import type { EnryptedURLRecord, MongoRecordDTO } from '../types';
import { recordsToEncriptedURLs } from '../utils/mappers';
import styles from '../styles/UrlForm.module.css';

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
    setFormValue('');
    const response = await fetch(`${process.env.API_BASE_URL}postNewUrl`, {
      method: 'post',
      body: JSON.stringify({ url: formValue }),
    });

    try {
      const jsonResponse: MongoRecordDTO = await response.json();

      setEncryptedUrls([
        ...encriptedUrls,
        ...recordsToEncriptedURLs([jsonResponse]),
      ]);
    } catch {
        alert('somehting has gone wrong processing your request, please check the stack trace.')
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={HandleFormSubmit}>
        <label>URL:</label>
        <input type='url' value={formValue} onChange={handleFormChange} />

        <input type='submit' value='Generate' />
      </form>
    </div>
  );
};
