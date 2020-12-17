import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import styles from './MapContentCard.module.scss';

const MapContentCard = ({
  title,
  icon,
  desc
}) => (
  <Row>
    <Col className={styles.cardImage}>
      <Image src={icon} fluid />
    </Col>
    <Col>
      <h5 className={styles.h5}>
        {title}
      </h5>
      <p className={styles.p}>
        {desc}
      </p>
    </Col>
  </Row>
);

export default MapContentCard;
