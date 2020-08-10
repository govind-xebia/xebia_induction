import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Carousel, { Modal, ModalGateway } from 'react-images';
import SectionTitle from '../../Components/SectionTitle';
import XebiaCard from '../../Components/XebiaCard';
import party from './assets/party.png';
import calendar from './assets/calendar.svg';
import gallery from './assets/gallery.svg';
import cares from './assets/cares.svg';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import galleryImages from './galleryImages';

import styles from './Life.module.scss';

export default () => {
  const [showGallery, setShowGallery] = useState(false);
  const galleryData = galleryImages.reduce((state, payload) => {
    return state.concat({
      source: payload
    });
  } ,[])
  const lifeData = [
    {
      icon: calendar,
      title: 'Events'
    },
    {
      icon: gallery,
      title: 'Gallery'
    },
    {
      icon: cares,
      title: 'Cares',
      desc: 'Xebia has tied up with Nudge Foundation (The /Nudge). The Nudge Foundation has helped 400+ million people in extreme poverty by giving them education and jobs to sustain themselves.'
    }
  ];

  const renderGallery = () => {
    return (
      <ModalGateway>
        {
          showGallery ? (
            <Modal allowFullscreen={false} onClose={() => setShowGallery(false)}>
              <Carousel 
                views={galleryData}
                isFullscreen
              />
            </Modal>
          ) : null
        }
      </ModalGateway>
    );
  }

  const handleClick = title =>  {
    switch(title){
      case 'Gallery':
        return setShowGallery(true);
      case 'Events':
        return document.querySelector('#events').scrollIntoView({ 
          behavior: 'smooth' 
        });
      default: 
        break;
    }
  }

  return (
    <Container fluid className="complete-width">
      <Row className={styles.lifeWrapper}>
        <Col>
          <Row className={styles.lifeContentWrapper}>
            <Col>
              <SectionTitle
                title="Life at Xebia" 
              />
            </Col>  
            <Col className={styles.lifeCardWrapper}>
              <Row>
                {
                  lifeData.map(item => (
                    <Col md={6} key={item.title}>
                      <XebiaCard
                        className={styles.lifeCard}
                        onClick={handleClick}
                        {...item}
                        style={{
                          marginBottom: '1.2rem',
                          height: 'auto'
                        }}
                      />
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </Col>
        <LazyLoadComponent>
          <Col 
            className={styles.lifeImage}
            style={{
              backgroundImage: `url("${party}")`
            }}
          />
        </LazyLoadComponent>
        {renderGallery()}
      </Row>
    </Container>
  )
};
