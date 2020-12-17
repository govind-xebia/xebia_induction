import React from 'react';
import { Card } from 'react-bootstrap';

import styles from './GroupCard.module.scss';

const GroupCard = ({
  name,
  dept,
  title,
  img
}) => (
  <Card 
    className={styles.groupCard}
  >
    <Card.Img className={styles.groupCardImg} src={img} />
    <Card.Body className={styles.groupCardBody}>
      <h4>
        {name}
      </h4>
      <h5>
        {dept}
      </h5>
      <p>
        {title}
      </p>
    </Card.Body>
  </Card>
);

export default GroupCard;