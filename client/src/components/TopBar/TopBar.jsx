import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../assets/foobarlogo.png";

const navLinkStyle = {
  color: "light", // Text color
  align: "right",
  padding: "0.5rem 1rem", // Adjust padding as needed
  margin: "0",
};

const navStyle = {
  textAlign: "left", // Align the text to the left
};

const TopBar = () => {
  return (
    <Navbar
      bg={"light"}
      data-bs-theme={"light"}
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            background-color="white"
            src={logo}
            height="54"
            width="54"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={{
                navLinkStyle,
              }}
              as={Link}
              to="/maps"
            >
              Maps
            </Nav.Link>
            <Nav.Link
              style={{
                navLinkStyle,
              }}
              as={Link}
              to="/info"
            >
              Info
            </Nav.Link>
            <Nav.Link
              style={{
                navLinkStyle,
              }}
              as={Link}
              to="/main"
            >
              Main
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
