import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {

    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto align-items-center">
                        <NavLink
                            to="/kiet"
                            className="nav-link fs-4"
                            activeClassName="active"
                        >
                            Kiệt
                        </NavLink>
                        <NavLink to="/about" className="nav-link fs-5" activeClassName="active">
                            About
                        </NavLink>
                        <NavLink to="/news" className="nav-link fs-5" activeClassName="active">
                            News
                        </NavLink>
                        <NavLink to="/quiz" className="nav-link fs-5" activeClassName="active">
                            Quiz
                        </NavLink>
                        <NavLink to="/contact" className="nav-link fs-5" activeClassName="active">
                            Contact
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        )
}

export default Header;
