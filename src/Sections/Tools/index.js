import React, { useContext } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import dotsBg from './assets/dots.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import CountryContext from '../../countryContext';

import SectionTitle from '../../Components/SectionTitle';

import styles from './Tools.module.scss';

import toolsData from './toolsData';

const Tools = () => {
  const { region, contractorMode } = useContext(CountryContext);
  const countryTools = toolsData[region]?.filter(tool => {
    if (contractorMode) {
      if (
        tool.toolId === 'dkm'
        || tool.toolId === 'jira'
        || tool.toolId === 'github'
        || tool.toolId === 'sharepoint'
        || tool.toolId === 'advantageclub'
      ) {
        return false;
      }
    }
    return true;
  }) || [];
  
  return (
    <Row className={styles.toolsWrapper} style={{
      backgroundImage: `url("${dotsBg}")`
    }}>
      <Col>
        <SectionTitle
          title="Day to Day Tools"
        />
      </Col>
      <Col className={styles.toolsColWrapper}>
        <Row>
          {
            countryTools.map(tool => (
              <Col md={3} key={tool.logo}>
                <div className={styles.toolCard}>
                  <div className={styles.cardImage}>
                    <Image src={tool.logo} fluid />
                  </div>
                  <div className={styles.desc}>
                    <p>
                      {tool.desc}
                    </p>
                  </div>
                  {
                    tool.appLinks && (
                      <div className={styles.appLink}>
                        Available On:
                        <a href={tool.appLinks.ios}>
                          <span>
                            <FontAwesomeIcon icon={faAppStoreIos} />
                          </span>
                        </a>
                        <a href={tool.appLinks.android}>
                          <span>
                            <FontAwesomeIcon icon={faGooglePlay} />
                          </span>
                        </a>
                      </div>
                    )
                  }
                </div>
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  )
};

export default Tools;
