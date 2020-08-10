import React from "react";
import OriginsBanner from './OriginSvg';
import { Row, Col, Button } from 'react-bootstrap';

import styles from './Origins.module.scss'

export default () => {
  const handleScroll = () => {
    document.querySelector('#pillars').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };
  return (
    <Row className={styles.originsWrapper} id="origins">
      <Col>
        <OriginsBanner />
        <h4>
          Started in 2001 by Daan Teunissen,<br/> Xebia is headquartered in Hilversum, Netherlands
        </h4>
        <Button
          onClick={handleScroll}
          type="button"
        >
          Our Guiding Pillars
        </Button>
      </Col>
    </Row>
  );
};
