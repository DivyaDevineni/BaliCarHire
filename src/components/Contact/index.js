import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../../css/styles.css';
class Contact extends React.Component {

  render() {
    return (
      <div>
        <h6 style={{ marginTop: "3rem" }}>Leave a message to us</h6>
        <hr />
        <p style={{ textAlign: "center" }}>Use this form if you have long questions.<br />
          Our goal is to answer your message within 12 hours, although we generally do better than that.<br />
          Type your email address and phone number carefully if you would like us to send you a rapid response.
          </p>
        <Form>
          <Form.Group md="4" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
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