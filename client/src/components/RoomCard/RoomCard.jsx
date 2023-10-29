import React from "react";
import Card from "react-bootstrap/Card";
import hall from "../../assets/hall.jpg";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const RoomCard = (props) => {
  return (
    <>
      <Card style={{ width: "90%" }}>
        <Row>
          <Col>
            <img variant="top" src={hall} alt="img" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default RoomCard;
