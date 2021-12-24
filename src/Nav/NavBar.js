import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">Tuva Oedegaard</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto navbar-custom">
                    <Link to="">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/projects">About me</Link>
                </Nav>
            </Navbar.Collapse>


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