import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
    return (
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Tuva Oedegaard</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/about-me">About me</Nav.Link>
    </Nav>
  

        {/* <header className="header">
            <div className="logoContainer">
                <span className="name">Tuva</span>
                <img className="logo" src={logo} alt="Tuva Logo"/>
            </div>
            <div className="menuItemsContainer">
                <ul className="menu">
                    <li className="menuItem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menuItem">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="menuItem">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </header> */}
        </Navbar>
    );
}