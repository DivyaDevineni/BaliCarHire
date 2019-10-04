import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import car from '../../images/car.png';
import car1 from '../../images/car1.png';
import car2 from '../../images/car2.png';
import CardDeck from 'react-bootstrap/CardDeck'
import styles from '../../css/styles.css';
class Bookcar extends React.Component {
  render() {
    return (
      <CardDeck style={{ marginTop: '1rem', marginRight: '0px', marginLeft: "0.3%" }}>
        <Card bg="warning" text="white" border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={car} />
          <Card.Body>
            <Card.Title>INNOVA</Card.Title>
            <Card.Text>
              Half Day : USD 26 / 5 hours
Over Time : USD 4 / hours
Brand-new minivan with air conditioning
Recommended for 4 passengers (maximum 7 without luggage)
Driver & Fuel Included
Mineral Water
    </Card.Text>
            <Button variant="primary">Book Car</Button>
          </Card.Body>
        </Card>
        <Card bg="secondary" text="white" border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={car1} />
          <Card.Body>
            <Card.Title>SUZUKI</Card.Title>
            <Card.Text>
              Half Day : USD 26 / 5 hours
Over Time : USD 4 / hours
Brand-new minivan with air conditioning
Recommended for 4 passengers (maximum 7 without luggage)
Driver & Fuel Included
Mineral Water
    </Card.Text>
            <Button variant="primary">Book Car</Button>
          </Card.Body>
        </Card>
        <Card bg="info" text="white" border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={car2} />
          <Card.Body>
            <Card.Title>TOYOTO AVANZA</Card.Title>
            <Card.Text>
              Half Day : USD 26 / 5 hours
Over Time : USD 4 / hours
Brand-new minivan with air conditioning
Recommended for 4 passengers (maximum 7 without luggage)
Driver & Fuel Included
Mineral Water
    </Card.Text>
            <Button variant="primary">Book Car</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    )
  }
}

export default Bookcar;