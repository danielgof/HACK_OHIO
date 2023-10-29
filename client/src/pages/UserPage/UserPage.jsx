import React from "react";
import { useLocation } from "react-router-dom";
import icon from "../../assets/portrait.png";
import Button from "react-bootstrap/Button";
import "./UserPage.css";

const UserPage = () => {
  const locatinon = useLocation();
  return (
    <>
      <div className="raleway-font" style={{ color: "black" }}>
        ID: {locatinon.state.id}
        <br></br>
        <img src={icon} style={{ width: "50px", height: "50px" }}></img>
        <div>J. Smith</div>
        <br></br>
        <div>EMAIL: </div>
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
