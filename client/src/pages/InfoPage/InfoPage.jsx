import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

const InfoPage = () => {
  const [data, getData] = useState([]);
  const navigate = useNavigate();
  const items = [
    { id: 1, text: "Building 1" },
    { id: 2, text: "Building 2" },
    { id: 3, text: "Building 3" },
  ];

  const getBuildings = () => {
    // some code for fetching data
  };
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
              {items.map((item) => (
                <Dropdown.Item
                  key={item.id}
                  onClick={() =>
                    navigate(`/building/${item.id}`, {
                      state: { id: item.id },
                    })
                  }
                >
                  {item.text}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup>
      </div>
    </>
  );
};

export default InfoPage;
