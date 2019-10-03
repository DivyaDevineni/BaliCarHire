import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Contact extends React.Component{

    render(){
        return(
<Form>
    <Form.Group controlId="formGroupName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="5"/>
  </Form.Group>
   <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        )
    }
}

export default Contact;