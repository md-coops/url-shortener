import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import fetch from 'isomorphic-unfetch';
import { Record } from '../types';
import { useState } from 'react';

type Props = {
  data?: { existingRecords: Record[] };
  status: number;
  statusText: string;
};

const Home: NextPage<Props> = ({ data, status, statusText }) => {
  const [ encriptedUrls, setEncriptedUrls ] = useState<Record[]>(data?.existingRecords);
  console.log(encriptedUrls);
  return (
    <div className={styles.container}>
      <Head>
        <title>Url Shortener</title>
        <meta name='description' content='appliction-to-generate-shortened-URLs' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to URL shortener
        </h1>

        <p className={styles.description}>
          Please see a list of our shortened URLs
        </p>
        {encriptedUrls}
      </main>

      <footer className={styles.footer}>
        <span>Written By Morgan Cooper, mdcooper98@gmail.com</span>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/getAllShortenedUrl');

  try {
    const json = await response.json();
    return {
      props: {
        data: { existingRecords: json },
        status: response.status,
        statusText: response.statusText,
      },
    };
  } catch {
    return {
      props: {
        status: response.status,
        statusText: response.statusText,
      },
    };
  }
}

export default Home;
