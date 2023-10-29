import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Stack from "react-bootstrap/Stack";
import BuildingCard from "../../components/BuildingCard/BuildingCard";
import "./SearchPage.css";

const SearchPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getBuildings = (e) => {
    console.log(e.target.value);
    const apiUrl = "http://localhost:5000/api/v1/building/bld_name";

    const data = {
      building_name: e.target.value,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // You can adjust the content type based on your server's requirements
      },
      body: JSON.stringify(data), // Convert the data object to a JSON string
    };
    fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log("Data received:", data);
        setData(data["data"]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  console.log(data);

  return (
    <>
      <div style={{ backgroundColor: "#2D3032" }}>
        <br></br>
        <br></br>
        <br></br>
        <div align="center" className="raleway-font">
          <InputGroup style={{ width: "80%" }} className="mb-3">
            <Stack>
              <Form.Control
                onChange={(e) => {
                  getBuildings(e);
                }}
                align="center"
                placeholder="Enter the name of a building"
                aria-label="Enter the name of a building"
                aria-describedby="basic-addon2"
              />
              <br></br>
              <br></br>
              <Stack>
                {data.map((val, i) => (
                  <div
                    onClick={() =>
                      navigate(`/building_room/${val.id}`, {
                        state: { id: val.id, title: val.building_name },
                      })
                    }
                    align="center"
                    key={i}
                  >
                    <BuildingCard title={val.building_name}>
                      You can be intrested in: {val.building_name}
                    </BuildingCard>
                    <br></br>
                  </div>
                ))}
              </Stack>
            </Stack>
          </InputGroup>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
