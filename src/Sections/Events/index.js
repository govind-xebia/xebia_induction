import React from 'react';
import { Row, Col, Carousel, Image } from 'react-bootstrap';
import play from './assets/play.svg';

import SectionTitle from '../../Components/SectionTitle';

import eventData from './eventData';

import styles from './Events.module.scss';

const EventItem = props => {
  const handleRedirect = link => window.open(link, '_blank');
  return (
    <Row>
      <Col>
        <div className={styles.eventItemContent}>
          <h3>
            {props.content}
          </h3>
          {
            props.videoLink && (
              <button 
                style={{
                  backgroundImage: `url("${play}")`
                }}
                onClick={() => handleRedirect(props.videoLink)}
              />
            )
          }
        </div>
      </Col>
      <Col className={styles.videoCol}>
        <Image src={props.image} className={styles.eventImage} fluid/>
      </Col>
    </Row>
  );
}

export default () => {
  return (
    <Row className={styles.eventsWrapper} id="events">
      <Col>
        <SectionTitle
          title="Events at Xebia"
        />
      </Col>
      <Col className={styles.eventsContent}>
        <Carousel interval={null}>
          {
            eventData.map(item => (
              <Carousel.Item key={item.image} className={styles.eventCarousel}>
                <EventItem {...item}/>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Col>
    </Row>
  );
}; 