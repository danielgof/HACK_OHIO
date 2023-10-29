import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import icon from "../../assets/portrait.png";
import Button from "react-bootstrap/Button";
import "./UserPage.css";
import { URL } from "../../lib/ServerAPI";

const UserPage = () => {
  const [data, setData] = useState([]);
  const locatinon = useLocation();

  useEffect(() => {
    const apiUrl = `${URL}/user/get_info`;
    const data = {
      id: 15,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        setData(data["data"]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <div className="raleway-font" style={{ color: "black" }}>
        ID: {locatinon.state.id}
        <br></br>
        <img src={icon} style={{ width: "50px", height: "50px" }} alt="img" />
        <div>USERNAME: {data[0].username}</div>
        <br></br>
        <div>EMAIL: {data[0].email}</div>
        <br></br>
        <Button variant="dark">My Buildings</Button>
        <Button variant="dark" style={{ margin: "0 20px" }}>
          My Rooms
        </Button>
      </div>
    </>
  );
};

export default UserPage;
