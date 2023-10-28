import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../assets/foobarlogo.png";

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
            height="45"
            width="54"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Nav.Link style={{ color: "light" }} as={Link} to="/maps">
          Maps
        </Nav.Link>
        <Nav.Link style={{ color: "light" }} as={Link} to="/info">
          Info
        </Nav.Link>
        <Nav.Link style={{ color: "light" }} as={Link} to="/main">
          Main
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default TopBar;
