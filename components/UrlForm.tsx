import { ChangeEvent, useState } from 'react';

export const UrlForm = () => {
  const [value, setValue] = useState<string>('');

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const HandleFormSubmit = (value: string) => {
    fetch('http://localhost:3000/api/postNewUrl', { method: 'post', body: JSON.stringify({url: 'some-url'}) });
  };

  return (
    <form>
      <label>
        URL:
        <input type='text' value={value} onChange={handleFormChange} />
      </label>
      <input
        type='submit'
        value='Generate'
        onSubmit={() => HandleFormSubmit(value)}
      />
    </form>
  );
};
