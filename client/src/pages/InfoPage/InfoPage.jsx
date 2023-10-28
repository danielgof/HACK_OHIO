import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const InfoPage = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>
    </>
  );
};

export default InfoPage;
