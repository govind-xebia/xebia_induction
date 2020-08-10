import React from 'react';
import  styles from './HrCard.module.scss';

export default ({
  name,
  contact,
  email
}) => (
  <div className={styles.hrCard}>
    <h5>
      Human Resource
    </h5>
    <div style={{ margin: 0 }}>
      {name} <br />
      {contact} <br />
      {email}
    </div>
  </div>
);