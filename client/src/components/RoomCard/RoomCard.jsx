import React from "react";
import Card from "react-bootstrap/Card";
import hall from "../../assets/hall.jpg";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
// import { useLocation } from "react-router-dom";

const RoomCard = (props) => {
  // const location = useLocation();
  return (
    <>
      <Card style={{ width: "90%" }}>
        <Row>
          <Col>
            <img variant="top" src={hall} alt="img" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{props.room_name}</Card.Title>
              <Card.Text>{props.descr}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default RoomCard;
