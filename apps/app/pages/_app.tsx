import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Übersetzungsbüro Otto Schuster Rumänisch Deutsch</title>
      </Head>
      <header>
        <h1>Übersetzungsbüro Schuster</h1>
        <button className="iconButton">
          <img src="/menu.svg" alt="" />
        </button>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
