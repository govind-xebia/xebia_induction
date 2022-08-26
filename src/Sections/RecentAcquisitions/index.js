import { Row, Col, Container, Image } from "react-bootstrap";
import SectionTitle from "../../Components/SectionTitle";

import data from "./acquisitionData";
import styles from "./RecentAcquisitions.module.scss";

const RecentAcquisitions = () => (
  <Container fluid style={{
    marginBottom: "5rem"
  }}>
    <Row>
      <Col>
        <SectionTitle title="Recent Acquisitions" />
      </Col>
    </Row>
    <Row md={2}>
      {data.map((eachData) => (
        <Col key={JSON.stringify(eachData)}>
          <div className={styles.acquisitionCard}>
            <Image
              src={eachData.logo}
              className={styles.acquisitionLogo}
              fluid
            />
            <ul className={styles.acquisitionContent}>
              {eachData.content.map((eachContent) => (
                <li key={eachContent}>{eachContent}</li>
              ))}
            </ul>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default RecentAcquisitions;
