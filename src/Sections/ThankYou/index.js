import React from 'react';
import { Image } from 'react-bootstrap';
import SectionTitle from '../../Components/SectionTitle';
import smiley from './smiley.svg';

import styles from './ThankYou.module.scss'

export default () => (
  <div className={styles.thankYouWrapper}>
    <div className={styles.thankYouTitle}>
      <SectionTitle
        title="Thank you"
      />
      <h5>
        Your goodies are on their way, enjoy this video.
      </h5>
      <Image src={smiley} fluid />
    </div>
    <div className={`${styles.videoWrapper} embed-responsive embed-responsive-21by9`}>
      <iframe
        title="intro-vid"
        className="embed-responsive-item"
        src="https://www.youtube.com/embed/5TVVIEwKn5c" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
      />
    </div>
  </div>
);