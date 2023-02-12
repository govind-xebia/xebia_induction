import { Row, Col, Image } from 'react-bootstrap';
import SectionTitle from '../../Components/SectionTitle';

import styles from "./Chapters.module.scss";

import chaptersImage from "./assets/chapters.png";


const Chapters = () => (
  <Row className={styles.chaptersWrapper}>
  <Col>
    <SectionTitle
      title="Service Lines"
    />
  </Col>
  <Col>
    <Image
      src={chaptersImage}
      className={styles.imageAsset}
      fluid
    />
  </Col>
</Row>
)

export default Chapters;