import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useLocation, useNavigate } from "react-router-dom";
import holder from "../../assets/placeholder.jpg";

const RoomPage = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <h1>{location.state.room_name}</h1>
      <Carousel
      // onClick={() =>
      //   navigate(`/route_to/${location.state.room_name}`, {
      //     state: { room_name: location.state.room_name },
      //   })
      // }
      >
        <Carousel.Item>
          <img height="inherit" src={holder} alt="img" />
          <Carousel.Caption>
            <h3
              onClick={() =>
                navigate(`/route_to/${location.state.room_name}`, {
                  state: { room_name: location.state.room_name },
                })
              }
            >
              Click to navigate to the room
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={holder} alt="img" />
          <Carousel.Caption>
            <h3
              onClick={() =>
                navigate(`/route_to/${location.state.room_name}`, {
                  state: { room_name: location.state.room_name },
                })
              }
            >
              Click to navigate to the room
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={holder} alt="img" />
          <Carousel.Caption>
            <h3
              onClick={() =>
                navigate(`/route_to/${location.state.room_name}`, {
                  state: { room_name: location.state.room_name },
                })
              }
            >
              Click to navigate to the room
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default RoomPage;
