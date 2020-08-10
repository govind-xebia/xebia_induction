import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import SectionTitle from '../../Components/SectionTitle';
import XebiaCard from '../../Components/XebiaCard';
import policy from './assets/policy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import CountryContext from '../../countryContext';

import 'react-lazy-load-image-component/src/effects/blur.css';

import { contentData, policyData } from './policyData';

import styles from './Policy.module.scss';

export default () => {
  const [content, setContent] = useState('all');
  const { country } = useContext(CountryContext);  
  const policyContent = {
    countryPolicy: policyData[country] || [],
    countryPolicyData: contentData[country] || []
  }

  const renderSectionContent = (sectionData, col) => (
    <Row className={styles.leaveContentWrapper}>
      <Col className={styles.leavePolicyTitle}>
        <SectionTitle
          title={sectionData.title}
        />
        <Button
          type="button"
          className={styles.backBtn}
          onClick={() => setContent('all')}
        >
          <FontAwesomeIcon icon={faArrowLeft} className={styles.backIcon}/>
        </Button>
      </Col>  
      <Col>
        <Row className={styles.leaveListWrapper}>
          {
            sectionData.data.map(({title, content}) => (
              <Col md={col} key={title ? title : 'perf'}>
                <Card className={`${styles.leaveCard} shadow-sm`}>
                  <Card.Body>
                    {
                      title && <h5>{title}</h5>
                    } 
                    <ul className={styles.leaveList}>
                      {
                        content.map(item => (
                          <li key={item}>
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  );

  const renderPolicyContent = title => {
    const { countryPolicyData } = policyContent;
    switch(title){
      case 'Leave':
        return renderSectionContent(countryPolicyData.leave, country === 'in' ? 6 : 12);
      case 'Rewards':
        return renderSectionContent(countryPolicyData.rewards, 12);
      case 'Performance':
        return renderSectionContent(countryPolicyData.performance, 12);
      case 'Longterm':
        return renderSectionContent(countryPolicyData.longterm, 12);
      default:
        return setContent('all');
    }
  }

  const renderAllContent = () => content === 'all' ? (
    <Row className={styles.policyContentWrapper}>
      <Col>
        <SectionTitle
          title="Policy"
        />
      </Col>  
      <Col className={styles.policyCardWrapper}>
        <Row>
          {
            policyContent.countryPolicy.map(item => (
              <Col md={6} key={item.title}>
                <XebiaCard
                  onClick={() => setContent(item.title.split(' ')[0])}
                  {...item}
                  styleClass={styles.policyCard}
                />
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  ) : (
    renderPolicyContent(content)
  );

  return (
    <Container fluid className="complete-width">
      <Row className={styles.policyWrapper}>
        <LazyLoadComponent
          effect="blur"
        >
          <Col 
            className={styles.policyImage}
            style={{
              backgroundImage: `url("${policy}")`
            }}
          />
        </LazyLoadComponent>
        <Col>
          { renderAllContent() }
        </Col>
      </Row>
    </Container>
  )
};
