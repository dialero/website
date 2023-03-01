import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Reach out',
    Svg: require('@site/static/img/undraw_high_five.svg').default,
    description: <>Connect with customers by voice or text messaging anywhere in the world.</>,
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_on_the_office.svg').default,
    description: <>Take notes during call and preserve detailed history of every conversation.</>,
  },
  {
    title: 'Work faster',
    Svg: require('@site/static/img/undraw_speed_test.svg').default,
    description: <>Connect a headset and start talking directly from Salesforce.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
