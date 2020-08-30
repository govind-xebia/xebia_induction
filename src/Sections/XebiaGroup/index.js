import React, { Fragment, useState } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import SectionTitle from '../../Components/SectionTitle';
import GroupCard from '../../Components/GroupCard';
import HrCard from '../../Components/HrCard';
import TreeCard from '../../Components/TreeCard';

import styles from './XebiaGroup.module.scss';

import { groupData, treeData, globalData, indiaData } from './groupData';

export default () => {
  const [toggleGroup, setGroup] = useState(false);
  const [showLocation, setLocation] = useState(null);

  const {title, logo, hasRight} = treeData;

  const getTopPos = (start, index) => start + (index * 12);

  const renderPeople = loc => {
    if (loc) {
      const { people, hr } = groupData[loc];
      return  (people || hr) && (
        <Row className={styles.columnWise}>
          <Col className={styles.execPos}>
            {
              people.length > 1 ? (
                <Carousel
                  controls={false}
                  className={styles.groupCarousel}
                  interval={null}
                  slide={false}
                >
                  {
                    people.map(person => (
                      <Carousel.Item key={person}>
                        <GroupCard 
                          {...person}
                        />
                      </Carousel.Item>
                    ))
                  }
                </Carousel>
              ) : (
                <GroupCard
                  {...people[0]}
                />
              )
            }
          </Col>
          {
            hr && (
              <Col className={styles.columnWise} style={{marginTop: '3rem'}}>
                <HrCard
                  {...hr}
                />
              </Col>
            )
          }
        </Row>
      )
    }

    return false;
  };

  return (
    <Row className={styles.groupWrapper}>
      <Col>
        <SectionTitle
          title="Xebia Group"
        />
      </Col>
      <Col>
        <Row>
          <Col sm={6} className={styles.treeWrapper}>
            <TreeCard 
              title={title}
              logo={logo}
              top={'39%'}
              hasRight={hasRight}
              hasLeft={false}
            />
            <span 
              className={styles.verticalLine}
              style={{
                height: '43.25rem',
                top: '6.6%',
                left: '11.875rem'
              }}
            />
            {
              treeData.children.map(({title, logo, bgSize, hasRight}, index ) => (
                <TreeCard
                  title={title}
                  logo={logo}
                  top={`${getTopPos(3, index)}%`}
                  left={'14.25rem'}
                  hasRight={hasRight && toggleGroup}
                  logoBg={index === 0 ? '#FFF' : '#D1C4EF'}
                  bgSize={bgSize}
                  handleClick={() => {
                    if (title.indexOf('Global') > 0) {
                      setGroup(!toggleGroup); 
                      setLocation('global');
                    }
                  }}
                />
              ))
            }
            {
              toggleGroup && (
                <Fragment>
                  <span 
                    className={styles.verticalLine}
                    style={{
                      height: '28.875rem',
                      top: '24.6%',
                      left: '25.15rem'
                    }}
                  />
                  {
                    globalData.map(({title, logo, bgSize, logoText}, index) => (
                      <TreeCard
                        title={title}
                        logo={logo}
                        top={`${getTopPos(21, index)}%`}
                        left={'27.525rem'}
                        hasRight={index === 0}
                        logoBg={'#D1C4EF'}
                        bgSize={bgSize}
                        logoText={logoText}
                        handleClick={() => setLocation(logoText.toLowerCase())}
                      />
                    ))
                  }
                  <span 
                    className={styles.verticalLine}
                    style={{
                      height: '14.45rem',
                      top: '24.6%',
                      left: '38.425rem'
                    }}
                  />
                  {
                    indiaData.map(({title, logo, bgSize, logoText}, index) => (
                      <TreeCard
                        title={title}
                        logo={logo}
                        top={`${getTopPos(21, index)}%`}
                        left={'40.8rem'}
                        logoBg={'#D1C4EF'}
                        bgSize={bgSize}
                        logoText={logoText}
                        handleClick={() => setLocation(logoText.toLowerCase())}
                      />
                    ))
                  }   
                </Fragment>             
              )
            }
          </Col>
          <Col sm={6} className={styles.execWrapper}>
            {
              renderPeople(showLocation)
            }
          </Col>
        </Row>
      </Col>
    </Row>
  )
};