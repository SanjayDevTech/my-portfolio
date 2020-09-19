import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../App.css';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">My Portofolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse"/>
                <Navbar.Collapse id="navbar-collapse">
                    <Nav className="mr-auto">
                        <Nav.Link href="#repositories">
                            Repositories
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Header;