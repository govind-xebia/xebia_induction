import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import clientsData from './clientsData';
import SectionTitle from '../../Components/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import styles from './Clients.module.scss';

const Clients = () => {
  const handleScroll = direction => {
    const clientele = document.getElementById('clientele');
    clientele.scrollBy((direction === 'right' ? clientele.offsetWidth : -clientele.offsetWidth), 0)
  }
  console.log(clientsData);
  const renderClients = () => {
    return (
      <Row id="clientele" className={styles.logoWrapper}>
        {
          clientsData.map(({ name, image }) => (
            <Col lg={2} className={styles.clientCol} key={name}>
              <LazyLoadComponent
                effect="blur"
              >
                <div
                  className={styles.imageRow}
                  style={{
                    backgroundImage: `url("${image}")`
                  }}
                />
              </LazyLoadComponent>
            </Col>
          ))
        }
      </Row>
    )
  }
  return (
    <Row className={styles.clientsWrapper}>
      <Col>
        <SectionTitle
          title="Clients"
        />
      </Col>
      <Col>
        {renderClients()}
      </Col>
      <Col className={styles.buttonRow}>
        <Button
          type="button"
          className={styles.clientBtn}
          onClick={() => handleScroll('left')}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <Button
          type="button"
          className={styles.clientBtn}
          onClick={() => handleScroll('right')}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </Col>
    </Row>
  );
};

export default Clients;
