import React from "react";
import Form from "react-bootstrap/Form";

const MainPage = () => {
  return (
    <>
      <div align="center">
        <h1>Take a picture of what around you</h1>
        <br></br>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Control
            style={{ width: "60%" }}
            type="file"
            size="lg"
            accept="image/*"
          />
        </Form.Group>
      </div>
    </>
  );
};

export default MainPage;
