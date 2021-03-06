import React from 'react';

import styles from './AwardsCard.module.scss';

const AwardsCard = ({title, content, className}) => (
  <div className={`${styles.awardCard} ${className}` }>
    <div className={styles.cardTitle}>
      {title}
    </div>
    <div className={styles.cardContent}>
      <ul>
        {
          content.map(item => (
            <li key={item}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  </div>
);

export default AwardsCard;
