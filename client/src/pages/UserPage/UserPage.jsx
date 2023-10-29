import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/portrait.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { History } from "react-router-dom";
import MyBuildings from "../../pages/MyBuildingsPage/MyBuildingsPage.jsx";
import MyRooms from "../../pages/MyRoomsPage/MyRoomsPage.jsx";
import "./UserPage.css";

const UserPage = () => {
  const locatinon = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use history.push() to navigate to the desired route
    navigate("/mybuilding"); // Replace '/destination' with the actual route you want to navigate to
  };
  const handleOtherClick = () => {
    // Use history.push() to navigate to the desired route
    navigate("/myroom"); // Replace '/destination' with the actual route you want to navigate to
  };
  return (
    <>
      <div className="raleway-font" style={{ color: "black" }}>
        ID:
        <br></br>
        <img src={icon} style={{ width: "50px", height: "50px" }}></img>
        <div>J. Smith</div>
        <br></br>
        <div>EMAIL: </div>
        <br></br>
        <Button variant="dark" onClick={handleButtonClick}>
          My Buildings
        </Button>
        <Button
          variant="dark"
          style={{ margin: "0 20px" }}
          onClick={handleOtherClick}
        >
          My Rooms
        </Button>
      </div>
    </>
  );
};

export default UserPage;
