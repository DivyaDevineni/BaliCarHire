import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import logo from '../../images/2.png';
import styles from '../../css/styles.css';
class Header extends React.Component {


    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href={"#home"}><img src={logo} alt="Logo" /></Navbar.Brand>
                <Nav className="justify-content-end ml-auto" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/bookcar">Book a Car</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/cars">Our Cars</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;