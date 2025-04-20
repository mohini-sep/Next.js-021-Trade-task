import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Orders management dashboard" />
        <title>Orders Dashboard</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </div>
  );
}