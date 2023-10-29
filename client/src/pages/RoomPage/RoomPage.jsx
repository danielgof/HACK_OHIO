import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useLocation } from "react-router-dom";
import holder from "../../assets/placeholder.jpg";

const RoomPage = () => {
  const location = useLocation();
  return (
    <>
      <h1>{location.state.room_name}</h1>
      <Carousel>
        <Carousel.Item>
          <img src={holder} alt="img" />
          <Carousel.Caption>
            <h3>Click to navigate to the room</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={holder} alt="img" />
          <Carousel.Caption>
            <h3>Click to navigate to the room</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={holder} alt="img" />
          <Carousel.Caption>
            <h3>Click to navigate to the room</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default RoomPage;
