import React from 'react';
import { Image } from 'react-bootstrap';
import SectionTitle from '../../Components/SectionTitle';
import smiley from './smiley.png';

import styles from './ThankYou.module.scss'

const ThankYou = () => (
  <div className={styles.thankYouWrapper}>
    <div className={styles.thankYouTitle}>
      <SectionTitle
        title="Thank you"
      />
      <h5>
        Your goodies are on their way, enjoy this video.
      </h5>
      <Image src={smiley} style={{ height: '60px' }} fluid />
    </div>
    <div className={styles.videoContainer}>
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

export default ThankYou;