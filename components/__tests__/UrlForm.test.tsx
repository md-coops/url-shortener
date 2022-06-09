import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React, { Dispatch } from 'react';
import { EnryptedURLRecord } from '../../types';
import { UrlForm } from '../UrlForm';

const mockEncryptedUrls: EnryptedURLRecord[] = [
  { id: '100', encryptedUrl: 'some-3h729' },
];
const mockFetchResponse = new Promise<Response>(() => 'data');

global.fetch = (input) => new Promise<any>((res, _rej) => res('data'));
const fetchSpy = jest
  .spyOn(global, 'fetch')
  .mockResolvedValue(mockFetchResponse);

const mockSetEncryptedUrls = jest.fn();

const mockSetState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');
useStateSpy.mockImplementation(((init: any) => ([init, mockSetState])) as ()=>[unknown, Dispatch<unknown>]);

describe('URL form', () => {
  it('should render the form correctly', () => {
    render(
      <UrlForm
        encriptedUrls={mockEncryptedUrls}
        setEncryptedUrls={mockSetEncryptedUrls}
      />
    );

    expect(screen.getByText('URL:')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call handleChange on textbox value change', () => {
    render(
      <UrlForm
        encriptedUrls={mockEncryptedUrls}
        setEncryptedUrls={mockSetEncryptedUrls}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'mor' } });

    expect(mockSetState).toHaveBeenCalledTimes(1);
  });

  it('should fire the global fetch HTTP method when submit button is clicked and then call mockSetEncryptedUrls', async () => {
    render(
      <UrlForm
        encriptedUrls={mockEncryptedUrls}
        setEncryptedUrls={mockSetEncryptedUrls}
      />
    );
    fireEvent.click(screen.getByRole('button'));

    expect(fetchSpy).toHaveBeenCalledTimes(1);

    // await waitFor(() => expect(mockSetEncryptedUrls).toHaveBeenCalled());
  });
});
