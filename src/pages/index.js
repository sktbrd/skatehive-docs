import React from 'react';
import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SkateHive Docs</title>
        <meta name="description" content="Documentation for SkateHive" />
        {/* Twitter metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SkateHive Docs" />
        <meta name="twitter:description" content="Documentation for SkateHive" />
        <meta name="twitter:image" content="/img/thumbnail.png" />
        {/* Open Graph metadata */}
        <meta property="og:title" content="SkateHive Docs" />
        <meta property="og:description" content="Documentation for SkateHive" />
        <meta property="og:image" content="https://ipfs.skatehive.app/ipfs/QmPvSv7iRDrHJTxBpqeoyi5utA8QmgEUCuAiQ2JsYCGz4m" />
        <meta property="og:url" content="https://docs.skatehive.app" />
        <meta property="og:type" content="website" />
        {/* Favicon */}
        <link rel="icon" href="/img/skatehive.png" />
      </Head>
      <Redirect to="/docs/" />
    </>
  );
}
