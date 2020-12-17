import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import SectionTitle from '../../Components/SectionTitle';
import MapContentCard from '../../Components/MapContentCard';
import locationData from './locationData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import 'react-lazy-load-image-component/src/effects/blur.css';

import mapAsset from './assets/map.svg';

import styles from './Locations.module.scss';

import data from './locationsContent';

const Locations = () => {

  const [hoverLocation, setHoverLocation] = useState(null);

  const renderPin = ({location, pos, office}) => {
    return(
      <div 
        key={location} 
        className={styles.mapMarker} 
        style={{...pos}}
        role="presentation" 
        onMouseEnter={() => setHoverLocation({location, office})}
        onMouseLeave={() => setHoverLocation(null)}
      >
        <FontAwesomeIcon icon={faMapPin} color={office ? "#6B1D5F" : '#E66637'}/>
      </div>
    )
  };

  return (
    <Row className={styles.locationsWrapper}>
      <Col>
        <SectionTitle
          title="Our Footprints"
        />
        <h5 
          className={styles.locationName}
          style={{color: hoverLocation && hoverLocation.office ? "#6B1D5F" : '#E66637'}}
        >
          {hoverLocation && hoverLocation.location}
        </h5>
      </Col>
      <Col className={styles.mapWrapper}>
        {
          locationData.map(item => renderPin(item))
        }
        <Image
          src={mapAsset}
          className={styles.mapAsset}
          fluid
        />
      </Col>
      <Col className={styles.locationContent}>
        <Row className={`${styles.locationDataWrapper} justify-content-md-center`}>
          {
            data.map((cardProps, index) => (
              <Col key={cardProps.title} lg={index === 1 ? 4 : 3}>
                <MapContentCard
                  {...cardProps}
                />
              </Col>
              ))
            }
        </Row>
      </Col>
    </Row>
  )
};

export default Locations;
