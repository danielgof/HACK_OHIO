import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";
import placeholder from "../../assets/indoor-maps.jpg";
import Col from "react-bootstrap/esm/Col";
import "./RoutePage.css";

const RoutePage = () => {
  const location = useLocation();
  return (
    <>
      <div className="raleway-font" style={{ color: "black" }}>
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
                <li>- Task 1 -</li>
                <li>- Task 2 -</li>
                <li>- Task 3 -</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default RoutePage;
