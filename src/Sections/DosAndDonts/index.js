import { Container, Row, Col } from 'react-bootstrap';
import { dos, donts } from './data';

const DosAndDonts = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          Dos
          Please complete your XFC (if applicable), ISMS and POSH test on priority.
          Please regularize your Day-1 attendance and mark the reason as “Joining Day” here
          Send Out Your Introduction Mailer to Aarti (aarti.thakur@xebia.com) 
          Start marking your attendance daily (when working) on Zoho People- either web or mobile app version
          Join #Askhr on teams click here
          Join Tech Channel on Teams, click here
          Update your Covid-19 vaccination status on MyXebia, click here
          Update Your Linkedin Profile
          Attend XEBIC session as per the invitation sent
          Be active and responsive on all channels of communication (MS Teams, Outlook etc)
          Be available during core business hours (10 am – 4 pm IST)

        </Col>
        <Col>
          Donts
          Create profile on your own on Zoho People
Release introduction on your own without sending it to HR team first
Refer to your co-workers as “sir” and “ma’am”
Speak in any language other than English during official communication
Mark yourself as “present” during leave
Take leave without prior intimation and approval from manager
        </Col>
      </Row>
    </Container>
  )
};

export default DosAndDonts;