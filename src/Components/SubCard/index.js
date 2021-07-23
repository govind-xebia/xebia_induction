import React from 'react';
import styles from './SubCard.module.scss';
import { Image, Card } from 'react-bootstrap';

export default ({
  name,
  title,
  img
}) => (
  <Card>
    <div className={styles.subCard}>
      <div class="img-square-wrapper">
        <Image
          src={img}
          style={{
            maxHeight: '150px'
          }}
          fluid 
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="d-block">
          {name}
        </h5>
        <h5 className="d-block">
          {title}
        </h5>
      </div>
    </div>
  </Card>
);