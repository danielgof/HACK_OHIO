import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/treasure-map.png";
import "./TopBar.css";
import NavBarUser from "../NavBarUser/NavBarUser";
import { UserContext } from "../../utils/UserContext";
import NavBarLogin from "./NavBarLogin";
import NavBarRegister from "./NavBarRegister";

const TopBar = () => {
  const { theme, isAuth, _, setTheme } = useContext(UserContext);
  const [modalShowLogin, setModalLoginShow] = useState(false);
  const [modalShowRegister, setModalRegisterShow] = useState(false);
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
            {isAuth ? (
              <NavBarUser />
            ) : (
              <Row>
                <Col>
                  <Button
                    variant="light"
                    onClick={() => setModalLoginShow(true)}
                  >
                    Login
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-door-open-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                    </svg>
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="light"
                    onClick={() => setModalRegisterShow(true)}
                  >
                    <Row>
                      <Col>
                        Register
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-person-fill-add"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                        </svg>
                      </Col>
                      <Col></Col>
                    </Row>
                  </Button>
                </Col>
              </Row>
            )}
            <NavBarLogin
              show={modalShowLogin}
              onHide={() => setModalLoginShow(false)}
            />
            <NavBarRegister
              show={modalShowRegister}
              onHide={() => setModalRegisterShow(false)}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
