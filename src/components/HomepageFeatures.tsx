/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '건강이 최고!',
    image: 'img/healthy.png',
    description: (
      <>
        라이딩, 축구, 헬스를 좋아합니다. :)
      </>
    ),
  },
  {
    title: '성장형 개발자',
    image: 'img/developer.png',
    description: (
      <>
          배움에 가치를 두고 새로운 기술을 사용하는 것에 적극적이며 다양한 분야에 호기심이 많습니다.
      </>
    ),
  },
  {
    title: 'Spring project',
    image: 'img/tree.png',
    description: (
      <>
        봄을 가장 좋아합니다.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
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
