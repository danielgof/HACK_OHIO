import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/foobarlogo.png";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="raleway-font">
      <Navbar
        bg={"light"}
        data-bs-theme={"light"}
        expand="lg"
        className="bg-dark"
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
              <Nav.Link as={Link} to="/map" className="ms-5">
                <div style={{ color: "white" }}>Map</div>
              </Nav.Link>
              <Nav.Link as={Link} to="/search" className="ms-5">
                <div style={{ color: "white" }}>Search for a Building</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
