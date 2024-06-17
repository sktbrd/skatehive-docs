import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Step 1',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <p><strong>primeiro passo pra fazer login  na Skitehive.APp</strong></p>
    ),
  },
  {
    title: 'Step 2',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <p><strong>Coloque seu nome do Hive keychain , igual da sua conta</strong></p>
    ),
  },
  {
    title: 'Step 3',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <p><strong>coloque pra fazer login , ira pedir confirmacao pra entrar, voce aceita e entra, fim . hahahaha</strong></p>
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
