import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import SectionTitle from '../../Components/SectionTitle';

import coeData from './coeData';

import styles from './COE.module.scss';

const CoE = () => {

  const [selected, setSelected] = useState({index: 0, ...coeData[0]});

  const handleCardClick = coeName => {
    const selectedIndex = coeData.findIndex(item => item.title === coeName);
    setSelected({ index: selectedIndex, ...coeData[selectedIndex]});
  }

  return (
    <Row className={styles.coeWrapper}>
      <Col>
        <SectionTitle 
          title="Our Centre of Excellence (CoE)"
        />
      </Col>
      <Col className={styles.coeCardCol}>
        <Row className={styles.coeCardWrapper}>
          {
            coeData.map((item, index) => (
              <Col key={item.title}>
                <Card 
                  role="presentation"
                  onClick={() => handleCardClick(item.title)}
                  className={`${styles.coeCard} ${(selected && index === selected.index) ? styles.active : ''}`}
                >
                  <Card.Img className={styles.coeCardImg} src={item.src} />
                  <Card.Body className={styles.coeCardBody}>
                    <h4>
                      {item.title}
                    </h4>
                    <div className={styles.coeDept}>
                      <p>
                        {item.smallDescription}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  )
};

export default CoE;