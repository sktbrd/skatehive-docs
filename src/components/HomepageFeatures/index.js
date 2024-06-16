import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Decentralized Governance',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       
        <p>SKTHV OG NFTs serve as your digital passport to everything Skatehive-related! Owning a SKTHV OG NFT proves the holder's OG status in our community, allowing Skatehive to establish a more decentralized and transparent voting system and giving holders the power to propose their own ideas and shape the future of Skatehive.</p>
       
      </>
    ),
  },
  {
    title: 'Blockchain and Skateboarding',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      
        <p>Blockchain is built on decentralized principles that enable more fair community-based systems and tools. Blockchain is beneficial for skateboarding. DAOs, for example, are like your local skate spot community making decisions together.</p>
        
      </>
    ),
  },
  {
    title: 'Hive Blockchain',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       
        <p>Hive Blockchain allows Skatehive to implement a DPOS curation system which enables monetized curation to all apps backed by Skatehive. Ethereum blockchain allows us to mint NFTs and create a decentralized governance system audited by the community. Bitcoin allows us to hold value without a centralized bank.</p>
        
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={styles.feature}>
    <div className="text--center">
      <Svg className={styles.featureSvg} role="img" />
    </div>
    <div className="text--center padding-horiz--md">
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>{description}</div>
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
          <div className="col col--4" key={idx}>
            <Feature {...props} />
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
