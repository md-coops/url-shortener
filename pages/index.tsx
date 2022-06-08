import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import fetch from 'isomorphic-unfetch';
import { MongoRecordDTO } from '../types';
import { useState } from 'react';
import { List } from '../components/List';
import { recordsToEncriptedURLs } from '../utils/mappers';

type Props = {
  data: MongoRecordDTO[];
  status: number;
  statusText: string;
};

const Home: NextPage<Props> = ({ data, status, statusText }) => {
  const [encriptedUrls, setEncriptedUrls] = useState(
    recordsToEncriptedURLs(data)
  );

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
        <List listItems={encriptedUrls} />
      </main>

      <footer className={styles.footer}>
        <span>Written By Morgan Cooper, mdcooper98@gmail.com</span>
      </footer>
    </div>
  );
};

export async function getStaticProps(): Promise<{ props: Props }> {
  const response = await fetch('http://localhost:3000/api/getAllShortenedUrl');

  try {
    const json = await response.json();
    return {
      props: {
        data: json,
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
