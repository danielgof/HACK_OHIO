import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

const InfoPage = () => {
  const [data, getData] = useState([]);
  const navigate = useNavigate();
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div align="center">
        <InputGroup style={{ width: "80%" }} className="mb-3">
          <Form.Control
            onChange={(e) => {
              console.log(e.target.value);
            }}
            align="center"
            placeholder="Enter the name of a building"
            aria-label="Enter the name of a building"
            aria-describedby="basic-addon2"
          />
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                key={1}
                onClick={(e) => {
                  console.log("hello");
                  console.log();
                  // navigate(`/building/${id}`, { state: { id: id } });
                }}
              >
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup>
      </div>
      {/* <Button
          variant="light"
          onClick={(e) => {
            console.log(e.target.val);
          }}
        >
          Light
        </Button> */}
    </>
  );
};

export default InfoPage;
