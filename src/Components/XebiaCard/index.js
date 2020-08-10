import React from 'react';
import { Card } from 'react-bootstrap';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import styles from './XebiaCard.module.scss';

export default ({
  title,
  desc,
  icon,
  active,
  onClick,
  style,
  styleClass
}) => {
  return (
    <Card 
      role="presentation" 
      onClick={() => onClick(title)} 
      className={`${styles.xebiaCard} ${active ? styles.active : ''} ${styleClass}`}
      style={{...style}}
    >
      <Card.Body style={{padding: '1.5rem 2.5rem 2.5rem'}}>
        <LazyLoadImage
          className="img-fluid"
          src={icon}
        />
        <h4>
          {title}
        </h4>
        { desc && (
            <p className={title.indexOf('Quality') >= 0 ? styles.bigTitlePara : '' }>
              {desc}
            </p>
          )
        } 
      </Card.Body>
    </Card>
  )
};
