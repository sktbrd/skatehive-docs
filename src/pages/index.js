import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

// import { MendableSearchBar } from "@mendable/search";
import styles from './index.module.css';

import Animation from './frames.js';

const style = { darkMode: true, accentColor: "limegreen" }

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((frameIndex + 1) % Animation.length);
    }, 200);

    return () => clearInterval(interval);
  }, [frameIndex]);


  return (
    <header className={('hero hero--primary', styles.heroBanner)}>
      {/* <div className="container"> */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Animation interval={200} />
        {/* <MendableSearchBar placeholder="Ask me anything , in any language, as dumb as might be, dont be shy..." userIcon="https://i.gifer.com/origin/f1/f1a737e4cfba336f974af05abab62c8f_w200.gif" botIcon="https://images.ecency.com/u/hive-173115/avatar/large" cmdShortcutKey="y" dialogPlaceholder="Ask me anything about Skatehive" anon_key='524a2d83-688b-477a-ba99-05131d06138d' style={style} /> */}

      {/* </div> */}
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn about Skatehive">

      <Helmet>
        <meta charSet="utf-8" />
        <title>Skatehive Docs 🛹</title>
        <meta property="og:title" content="Skatehive Docs 🛹" />
        <meta property="og:description" content="SkateHive App and Community documentation for onboarding savvy users" />
        <meta property="og:image" content="https://thumbnails.odycdn.com/optimize/s:400:0/quality:95/plain/https://spee.ch/8/b416b166fd9dbe4e.png" />
        <meta property="og:url" content="https://skatehive.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <HomepageHeader />
    </Layout>
  );
}
