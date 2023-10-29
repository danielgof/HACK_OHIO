import React from "react";
import { useLocation } from "react-router-dom";

const RoomPage = () => {
  const location = useLocation();
  return (
    <>
      <div>RoomPage</div>
      {location.state.room_name}
    </>
  );
};

export default RoomPage;
