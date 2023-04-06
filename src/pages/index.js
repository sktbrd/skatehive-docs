import React from 'react';
import { Helmet } from 'react-helmet';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <iframe width="760" height="415" src="https://odysee.com/$/embed/@TheLongboardHive:d/how-i-got-rich-skateboarding-skatehive:a?r=6CdULwobgTDPf6FTjLK9oWLTPPBmW3kj" allowfullscreen></iframe>  
            
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Become a SkateNerd - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skatehive Docs 🛹</title>
        <meta property="og:title" content="Skatehive Docs 🛹" />
        <meta property="og:description" content="SkateHive App and Community documentation for onboarding savvy users" />
        <meta property="og:image" content="https://thumbnails.odycdn.com/optimize/s:400:0/quality:95/plain/https://spee.ch/8/b416b166fd9dbe4e.png" />
        <meta property="og:url" content="https://example.com" />
        <meta name="twitter:card" content="summary_large_image" />

      </Helmet>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
