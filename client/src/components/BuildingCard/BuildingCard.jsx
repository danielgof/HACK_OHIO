import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../../assets/union.jpg";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const BuildingCard = (props) => {
  return (
    <>
      <Card style={{ width: "90%" }}>
        <Row>
          <Col>
            <img variant="top" src={logo} alt="img" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.decr}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default BuildingCard;
