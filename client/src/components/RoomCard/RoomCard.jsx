import React from "react";
import Card from "react-bootstrap/Card";
import hall from "../../assets/hall.jpg";

const RoomCard = (props) => {
  return (
    <>
      <Card style={{ width: "90%" }}>
        <img variant="top" src={hall} alt="img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default RoomCard;
