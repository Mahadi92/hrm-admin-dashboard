import React from "react";
import { Collapse } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classNames from "classnames";
import { MenuItemTypes } from "../../constants/menu";
// helpers
import { getHorizontalMenuItems } from "../../helpers/menu";
import { findAllParent, findMenuItem } from "../../helpers/menu";
// components
import AppMenu from "./Menu";
import MainSubmenu from "./MainSubmenu";

interface NavbarProps {
    isMenuOpened?: boolean;
}




const Mainmenu = ({ isMenuOpened }: NavbarProps) => {
    // change the inputTheme value to light for creative theme
    const inputTheme = "light";

    // console.log('getHorizontalMenuItems',getHorizontalMenuItems)
    return (
        <div className="topnav">
            <div className="container">
                <nav
                    className={classNames(
                        "navbar",
                        "navbar-expand-lg",
                        "topnav-menu",
                        "navbar-" + inputTheme
                    )}
                >
                    <Collapse in={isMenuOpened} className="navbar-collapse">
                        <div className="" id="topnav-menu-content">
                            <MainSubmenu menuItems={getHorizontalMenuItems()} />
                            {/* <AppMenu menuItems={getHorizontalMenuItems()} /> */}
                            {/* <Navbar bg="white" expand="lg">
                            <Container>
                                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">
                                                Separated link
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar> */}
                        </div>
                    </Collapse>
                </nav>
            </div>
        </div>
    );
};

export default Mainmenu;
