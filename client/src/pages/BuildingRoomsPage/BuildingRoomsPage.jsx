import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoomCard from "../../components/RoomCard/RoomCard";
import { URL } from "../../lib/ServerAPI";

const BuildingRoomsPage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = `${URL}/room/rooms_bld`;
    const data = {
      building_name: "Ohio Union",
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
      <h1>{location.state.title}</h1>
      <ul>
        {data.map((item, i) => (
          <div
            onClick={() =>
              navigate(`/room/${item.id}`, {
                state: { id: item.id, room_name: item.room_name },
              })
            }
            align="center"
            key={i}
          >
            <RoomCard key={item.id}>{item.room_name}</RoomCard>
            <br></br>
          </div>
        ))}
      </ul>
    </>
  );
};

export default BuildingRoomsPage;
