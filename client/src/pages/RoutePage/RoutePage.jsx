import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";
import placeholder from "../../assets/indoor-maps.jpg";
import Col from "react-bootstrap/esm/Col";

const RoutePage = () => {
  const location = useLocation();
  return (
    <>
      <br></br>
      <h1>Navigation to {location.state.room_name}</h1>
      <br></br>
      <Container>
        <Row>
          <Col>
            <img style={{ width: "50%" }} src={placeholder} alt="img" />
          </Col>
          <Col>
            <ul>
              <li>task 1</li>
              <li>task 2</li>
              <li>task 3</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RoutePage;
