import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <Navbar expand="lg" bg={"light"} data-bs-theme={"light"} fixed="bottom">
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
  );
};

export default BottomBar;
