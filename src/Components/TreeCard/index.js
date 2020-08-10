import React from 'react';

import styles from './TreeCard.module.scss';

const TreeCard = ({
  title,
  handleClick,
  top,
  left,
  hasLeft,
  hasRight,
  logo,
  logoBg,
  logoText,
  logoColor,
  bgSize
}) =>(
  <div 
    role="presentation"
    className={styles.treeCard}
    style={{
      left,
      top
    }}
    onClick={handleClick}
  >
    <div 
      className={styles.treeCardLogo} 
      style={{
        backgroundColor: logoBg,
        backgroundImage: `url('${logo}')`,
        color: logoColor,
        backgroundSize: bgSize
      }}
    >
      {logoText}
    </div>
    { hasLeft && <span className={styles.leftLine}/> }
    { hasRight && <span className={styles.rightLine}/> }
    {title}
  </div>
);

TreeCard.defaultProps = {
  title: '',
  handleClick: null,
  top: null,
  left: null,
  hasLeft: true,
  hasRight: false,
  logo: null,
  logoBg: '#fff',
  logoText: null,
  logoColor: '#fff',
  bgSize: '50%'
}

export default TreeCard;

