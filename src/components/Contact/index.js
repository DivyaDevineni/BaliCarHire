import React from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import styles from '../../css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoogleMapReact from 'google-map-react';

import Input from '../Input';

import Button from '../Button';
var style = {
  fontSize: "1.5rem",

}

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Contact extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (




      <div className="section-contact">

        <section className="contact-container">

          <div className="contact-side">
            <div className="left-heading">
              <div style={{ margin: '0 auto' }}>
                <h2 className="app-section-heading">We're here</h2>
              </div>


            </div>
            <div className="left-content">
              <h1>Our Office</h1>
              <h6>Jacab Vab Lennepkade 334-H   </h6>
              <h6>1053 NJ Amsterdam</h6>
              <h6> The Netherlands</h6>
              <i className="far fa-circle"></i>
              <i className="far fa-circle"></i>
              <i className="far fa-circle"></i>

              <div style={{ height: '30rem', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "google api key" }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>


            </div>

          </div>
          <div className="contact-side">
            <div className="right-heading">
              <div style={{ margin: '0 auto' }}>
                <h2 className="app-section-heading">We're here</h2>
              </div>

            </div>
            <div className="right-content" style={{ width: "80%" }}>

              <Input />

              <Input />
              <Input />

              <Button />
            </div>
          </div>

        </section>
      </div>



    )
  }
}

export default Contact;