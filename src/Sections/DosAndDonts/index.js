import { Container, Row, Col, Image } from 'react-bootstrap';
import { dos, donts } from './data';
import styles from './styles.module.scss';
import doSvg from './assets/dos.svg';
import dontSvg from './assets/donts.svg';

const DosAndDonts = () => {
  return (
    <Container fluid>
      <Row className={styles.dosAndDontsWrapper}>
        <Col>
          <div className={styles.dosDontsContent}>
            <h5>
              Do's
            </h5>
            <ul>
              {
                dos.map(({
                  text,
                  linkText,
                  link
                }) => (
                  <li>
                    {text + ' '}
                    {
                      linkText && link ? (
                        <a href={link}>
                          {linkText}
                        </a>
                      ) : ''
                    }
                  </li>
                ))
              }
            </ul>
          </div>
        </Col>
        <Col className="text-center">
          <Image src={doSvg} fluid/>
        </Col>
      </Row>
      <Row className={styles.dosAndDontsWrapper}>
        <Col className="text-center">
          <Image src={dontSvg} fluid/>
        </Col>
        <Col>
          <div className={styles.dosDontsContent}>
            <h5>
              Dont's
            </h5>
            <ul>
              {
                donts.map(({
                  text,
                  linkText,
                  link
                }) => (
                  <li>
                    {text + ' '}
                    {
                      linkText && link ? (
                        <a href={link}>
                          {linkText}
                        </a>
                      ) : ''
                    }
                  </li>
                ))
              }
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default DosAndDonts;