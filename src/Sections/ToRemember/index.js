import React, { useState, useContext } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import CountryContext from '../../countryContext';
import toRememberData from './toRememberData';

import dots from './assets/dots.svg';

import styles from './ToRemember.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ThingsToRemember = () => {
  const [index, setIndex] = useState(0);
  const { country } = useContext(CountryContext);

  const countrySpecific = toRememberData[country] || [];
  const handleSelect = selectedIndex => setIndex(selectedIndex);

  return (
    <Container fluid className="complete-width">
      <LazyLoadComponent
        effect="blur"
      >
        <Row 
          className={styles.rememberWrapper}
          style={{
            backgroundImage: `url("${dots}")`
          }}
        >
          <Col className={styles.rememberTextWrapper}>
            <h1>
              Things to<br />
              <span>Remember</span>
            </h1>
          </Col>
          <Col className={styles.detailCard}>
            <Carousel 
              className={styles.dropShadow}
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
              indicators={countrySpecific.length > 1}
            >
              {
                countrySpecific.map(({title, subtitle, description}, i) => {
                  return (
                    <Carousel.Item key={i}>
                      <div className={styles.remCard}>
                        <h5>
                          {title} <span>{subtitle}</span>
                        </h5>
                        <p>
                          {description}
                        </p>
                      </div>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </Col>
        </Row>
      </LazyLoadComponent>
    </Container>
  )
}
export default ThingsToRemember;