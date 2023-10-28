import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <Navbar
        bg={"light"}
        data-bs-theme={"light"}
        expand="lg"
        className="bg-body-tertiary">
        <Container>
        <Nav.Link
        style={{color: "light"}}
        as={Link}
        to="/maps">
        Maps
        </Nav.Link>
        <Nav.Link
        style={{color: "light"}}
        as={Link}
        to="/info">
        Info
        </Nav.Link>
        <Nav.Link
        style={{color: "light"}}
        as={Link}
        to="/main">
        Main
        </Nav.Link>
        </Container>
        </Navbar>
    );
};

export default TopBar;