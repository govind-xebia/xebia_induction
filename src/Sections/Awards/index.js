import React from 'react';
import { Row, Col } from 'react-bootstrap';

import SectionTitle from '../../Components/SectionTitle';
import AwardsCard from '../../Components/AwardsCard';

import awardsData from './awardsData';

import styles from './Awards.module.scss';

const Awards = () => (
  <Row className={styles.awardsWrapper}>
    <Col>
      <SectionTitle
        title="Awards and Recognition"
      />
    </Col>
    <Col className={styles.timelineWrapper}>
      {
        awardsData.map((award, index) => {
          const isEven = index%2 === 0;
          return (
            <Row key={award.title}>
              {isEven && <Col />}
              <Col className={`${styles.cardCol} ${!isEven ? styles.rowRev : ''}`}>
                <div className={`${styles.timelineDot} ${!isEven ? styles.rightDot : ''}`}>
                  <span className={styles.marker} />
                </div>
                <div className={`${styles.timelineConnect} ${!isEven ? styles.rightDot : ''}`}>
                  <span className={styles.line} />
                </div>
                <AwardsCard
                  {...award}
                  className={styles.cardAlign}
                />
              </Col>
              {!isEven && <Col />}
            </Row>
          );
        })
      }
    </Col>
  </Row>
);

export default Awards;
