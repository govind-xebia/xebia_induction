import { Row, Col, Image } from 'react-bootstrap';

import SectionTitle from '../../Components/SectionTitle';
import MapContentCard from '../../Components/MapContentCard';

import 'react-lazy-load-image-component/src/effects/blur.css';

import mapAsset from './assets/locations.png';

import styles from './Locations.module.scss';

import data from './locationsContent';

const Locations = () => (
    <Row className={styles.locationsWrapper}>
      <Col>
        <SectionTitle
          title="Our Footprints"
        />
      </Col>
      <Col className={styles.mapWrapper}>
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

export default Locations;
