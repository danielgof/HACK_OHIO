import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TeamPage = () => {
  return (
    <>
      <br></br>
      <div align="center">
        <Row>
          <Col>
            <Card style={{ width: "18rem", boxShadow: "0px 0px 5px #666" }}>
              <Card.Body>
                <Card.Title style={{ alignContent: "center" }}>
                  Daniil Gofman
                </Card.Title>
                <Card.Text>FullStack Engineer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card style={{ width: "18rem", boxShadow: "0px 0px 5px #666" }}>
              <Card.Body>
                <Card.Title style={{ alignContent: "center" }}>
                  Yury Pozdneev
                </Card.Title>
                <Card.Text>Backend Engineer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card style={{ width: "18rem", boxShadow: "0px 0px 5px #666" }}>
              <Card.Body>
                <Card.Title style={{ alignContent: "center" }}>
                  Quinton Holmes
                </Card.Title>
                <Card.Text>Frontend Engineer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card style={{ width: "18rem", boxShadow: "0px 0px 5px #666" }}>
              <Card.Body>
                <Card.Title style={{ alignContent: "center" }}>Alex Zhang</Card.Title>
                <Card.Text>Backend Engineer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TeamPage;
