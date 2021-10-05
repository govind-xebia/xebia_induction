import { Container, Row, Col } from 'react-bootstrap';
import { dos, donts } from './data';
import styles from './styles.module.scss';

const DosAndDonts = () => {
  return (
    <Container fluid>
      <Row className={styles.dosAndDontsWrapper}>
        <Col>
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
        </Col>
        <Col>
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
        </Col>
      </Row>
    </Container>
  )
};

export default DosAndDonts;