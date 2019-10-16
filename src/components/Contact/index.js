import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../../css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
var style = {
  fontSize: "1.5rem",

}
class Contact extends React.Component {

  render() {
    return (
      <div>


        <h6 style={{ marginTop: "3%" }}>Leave a message to us</h6>
        <hr />
        <Container>
          <Row className="justify-content-md-center" >
            <Col xs={4}>
              <FontAwesomeIcon icon={faWhatsapp} style={style} /><p>+6281999668686</p>
            </Col>
            <Col xs={4}><FontAwesomeIcon style={style} icon={faPhoneAlt} />
              <p>+6281999668686</p></Col>
          </Row>

        </Container>
        <div>
          <FontAwesomeIcon style={style} icon={faMobileAlt} />
          <p>+6281999668686</p></div>
        <div>
          <FontAwesomeIcon style={style} icon={faEnvelope} />
          <p>info@komangtravels.com</p></div>

        <p style={{ textAlign: "center" }}>Use this form if you have long questions.<br />
          Our goal is to answer your message within 12 hours, although we generally do better than that.<br />
          Type your email address and phone number carefully if you would like us to send you a rapid response.
          </p>
        <Form>

          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group><Form.Group controlId="formGroupphone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter your Phone number" />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formGroupsubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" />
          </Form.Group>
          <Form.Group controlId="formGroupMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
      </div>
    )
  }
}

export default Contact;