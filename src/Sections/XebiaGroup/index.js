import React, { Fragment, useState } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import SectionTitle from '../../Components/SectionTitle';
import GroupCard from '../../Components/GroupCard';
import SubCard from '../../Components/SubCard';
import TreeCard from '../../Components/TreeCard';

import styles from './XebiaGroup.module.scss';

import { groupData, treeData, globalData, indiaData } from './groupData';

const XebiaGroup = () => {
  const [toggleGroup, setToggleGroup] = useState(false);
  const [people, setPeople] = useState([]);
  const [subPeople, setSubPeople] = useState([]);

  const { title, logo, hasRight } = treeData;

  const getTopPos = (start, index) => start + (index * 12);

  const handleSelectItem = (index, people) => {
    const { sub } = people[index];
    setSubPeople(null);
    if (sub && sub.length > 0) {
      return setSubPeople(sub);
    }
  };

  const handleRenderCarousel = loc => {
    setToggleGroup(true);
    setSubPeople(null);
    const data = [...groupData[loc].people];
    if (data) {
      setPeople(data);
      if (data.length === 1 && data[0].sub) {
        setSubPeople([...data[0].sub]);
      }
    } else {
      setPeople([])
    }
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
              treeData.children.map(({ title, logo, bgSize, hasRight }, index) => (
                <TreeCard
                  key={title}
                  title={title}
                  logo={logo}
                  top={`${getTopPos(3, index)}%`}
                  left={'14.25rem'}
                  hasRight={hasRight && toggleGroup}
                  logoBg={index === 0 ? '#FFF' : '#D1C4EF'}
                  bgSize={bgSize}
                  handleClick={() => {
                    if (title.indexOf('Global') > 0) {
                      handleRenderCarousel('global');
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
                    globalData.map(({ title, logo, bgSize, logoText }, index) => (
                      <TreeCard
                        key={title}
                        title={title}
                        logo={logo}
                        top={`${getTopPos(21, index)}%`}
                        left={'27.525rem'}
                        hasRight={index === 0}
                        logoBg={'#D1C4EF'}
                        bgSize={bgSize}
                        logoText={logoText}
                        handleClick={() => {
                          handleRenderCarousel(logoText.toLowerCase())
                        }}
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
                    indiaData.map(({ title, logo, bgSize, logoText }, index) => (
                      <TreeCard
                        title={title}
                        logo={logo}
                        top={`${getTopPos(21, index)}%`}
                        left={'40.8rem'}
                        logoBg={'#D1C4EF'}
                        bgSize={bgSize}
                        logoText={logoText}
                        handleClick={() => handleRenderCarousel(logoText.toLowerCase())}
                      />
                    ))
                  }
                </Fragment>
              )
            }
          </Col>
          <Col sm={6} className={styles.execWrapper}>
            {
              people.length > 1 ? (
                <Row className={styles.columnWise}>
                  <Fragment>
                    <Col className={styles.execPos}>
                      <Carousel
                        className={styles.groupCarousel}
                        interval={null}
                        slide={false}
                        onSelect={i => handleSelectItem(i, people)}
                        onSlide={i => handleSelectItem(i, people)}
                      >
                        {
                          people.map((person, index) => (
                            <Carousel.Item key={JSON.stringify(person) + index}>
                              <GroupCard
                                {...person}
                              />
                            </Carousel.Item>
                          ))
                        }
                      </Carousel>
                    </Col>
                    {
                      subPeople && subPeople.map(subPerson => (
                        <Col
                          className={styles.columnWise}
                          style={{ marginTop: '3rem' }}
                        >
                          <SubCard
                            {...subPerson}
                          />
                        </Col>
                      ))
                    }
                  </Fragment>
                </Row>
              ) : (
                people.length === 1 && (
                  <Row className={styles.columnWise}>
                    <Fragment>
                      <Col className={styles.execPos}>
                        <GroupCard
                          {...people[0]}
                        />
                      </Col>
                      {
                        subPeople && subPeople.map(subPerson => (
                          <Col
                            className={styles.columnWise}
                            style={{ marginTop: '3rem' }}
                          >
                            <SubCard
                              {...subPerson}
                            />
                          </Col>
                        ))
                      }
                    </Fragment>
                  </Row>
                )
              )
            }
          </Col>
        </Row>
      </Col>
    </Row>
  )
};

export default XebiaGroup;
