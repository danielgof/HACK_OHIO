import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../../assets/union.jpg";

const BuildingCard = (props) => {
  return (
    <>
      <Card style={{ width: "90%" }}>
        <img variant="top" src={logo} alt="img" />
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

export default BuildingCard;
