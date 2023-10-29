import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./BottomBar.css";

const BottomBar = () => {
  return (
    <div className="raleway-font">
      <Navbar
        expand="lg"
        className="bg-dark"
        data-bs-theme={"dark"}
        fixed="bottom"
        style={{ backgroundColor: "#2D3032" }}
      >
        <Container>
          <Navbar.Brand style={{ color: "light" }} as={Link} to="/">
            <span
              style={{ color: "light" }}
              dangerouslySetInnerHTML={{ __html: "&copy;" }}
            />{" "}
            FooBar Gang
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default BottomBar;
