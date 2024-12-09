import '../styles/globals.css'; // Import global styles
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Add global meta tags */}
      <Head>
        <title>WeFrameTech</title>
        <meta
          name="description"
          content="WeFrameTech - Location d'appareils et mobiliers pour événements."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Render the current page */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
