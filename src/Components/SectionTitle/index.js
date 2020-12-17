import React from 'react';
import { Col } from 'react-bootstrap';

import styles from './SectionTitle.module.scss';

const SectionTitle =  ({
  title
}) => (
  <Col className={styles.sectionTitle}>
    <h1>
      {title}
    </h1>
  </Col>
);

export default SectionTitle;
