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
        <meta property="og:image" content="/img/thumbnail.png" />
        <meta property="og:url" content="https://docs.skatehive.app" />
        <meta property="og:type" content="website" />
        {/* Additional social media metadata can be added here if needed */}
      </Head>
      <Redirect to="/docs/" />
    </>
  );
}
