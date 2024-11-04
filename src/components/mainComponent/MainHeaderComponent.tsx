import React from 'react';
import { Navbar, Container, Nav, Button, Image } from 'react-bootstrap';
import logo from '../../../public/logo.svg'
import './MainComponent.css';

const MainHeader: React.FC = () => {
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark">
        <Image src={`${process.env.PUBLIC_URL}/logo.svg`} className="logo" alt="Reboost" ></Image>
          <Navbar.Brand href="/profile">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
      </Navbar>
    </header>
  );
};

export default MainHeader;
