import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/portrait.png";
import Button from "react-bootstrap/Button";
import "./UserPage.css";
import { URL } from "../../lib/ServerAPI";
import { UserContext } from "../../utils/UserContext";
import NotAuthorized from "../../components/NotAuthorized/NotAuthorized";

const UserPage = () => {
  const [info, setInfo] = useState([{}]);
  const { isAuth } = useContext(UserContext);

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
        // console.log("Data received:", data);
        setInfo(data["data"]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use history.push() to navigate to the desired route
    navigate("/mybuilding"); // Replace '/destination' with the actual route you want to navigate to
  };
  const handleOtherClick = () => {
    // Use history.push() to navigate to the desired route
    navigate("/myroom"); // Replace '/destination' with the actual route you want to navigate to
  };

  console.log("isAuth" + isAuth);

  return (
    <>
      {isAuth ? (
        <div className="raleway-font" style={{ color: "black" }}>
          ID:
          <br></br>
          <img src={icon} style={{ width: "50px", height: "50px" }} alt="img" />
          <div>USERNAME: {info[0]["username"]}</div>
          <br></br>
          <div>EMAIL: {info[0]["email"]}</div>
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
      ) : (
        <NotAuthorized />
      )}
    </>
  );
};

export default UserPage;
