import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import fetch from 'isomorphic-unfetch';
import { MongoRecordDTO } from '../types';
import { useState } from 'react';
import { List } from '../components/List';
import { recordsToEncriptedURLs } from '../utils/mappers';
import { UrlForm } from '../components/UrlForm';

type Props = {
  data: MongoRecordDTO[];
  status: number;
  statusText: string;
};

const Home: NextPage<Props> = ({ data, status, statusText }) => {
  const [encriptedUrls, setEncriptedUrls] = useState(
    recordsToEncriptedURLs(data)
  );
  const shouldDisplayPreFetchError = status !== 200;

  return (
    <div className={styles.container}>
      <Head>
        <title>Url Shortener</title>
        <meta
          name='description'
          content='appliction-to-generate-shortened-URLs'
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to URL shortener</h1>
        <p className={styles.description}>
          Please see a list of our shortened URLs
        </p>
        {shouldDisplayPreFetchError && (
          <p
            className={styles.failureMessage}
          >{`Failed to pre-fetch exisitng records, server responded with status code ${status}: "${statusText}"`}</p>
        )}
        <List listItems={encriptedUrls} />
        <UrlForm
          encriptedUrls={encriptedUrls}
          setEncryptedUrls={setEncriptedUrls}
        />
      </main>

      <footer className={styles.footer}>
        <span>Written By Morgan Cooper, mdcooper98@gmail.com</span>
      </footer>
    </div>
  );
};

export async function getStaticProps(): Promise<{ props: Props }> {
  console.log(process.env.API_BASE_URL);
  const response = await fetch(`${process.env.API_BASE_URL}getAllShortenedUrl`);

  try {
    const ResponseJson: MongoRecordDTO[] = await response.json();
    return {
      props: {
        data: ResponseJson,
        status: response.status,
        statusText: response.statusText,
      },
    };
  } catch {
    return {
      props: {
        data: [],
        status: response.status,
        statusText: response.statusText,
      },
    };
  }
}

export default Home;
