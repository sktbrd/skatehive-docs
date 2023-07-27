import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Decentralized Governance',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      SKTHV OG NFTs are your digital passport to anything Skatehive-related! Owning a SKTHV OG NFTs prooves holder’s OG status in our community, allows Skatehive to establish a more decentralized and transparent voting system and give holders the power to propose their own ideas as well as shape the future of Skatehive.
      </>
    ),
  },
  {
    title: 'Blockchain and Skateboarding',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Blockchain is built with decentralized principals that enables more fair cimmunity based systems and tools. 
        Blockchain is better for skateboarding. Daos, for example, are like your local spot community making decisions together.
      </>
    ),
  },
  {
    title: 'Hive Blockchain',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Hive Blockchain allows skatehive to implement a DPOS curation system 
        which enables monetized curation to all apps backed by skatehive
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
