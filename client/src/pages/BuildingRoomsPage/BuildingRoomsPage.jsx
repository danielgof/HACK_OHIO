import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoomCard from "../../components/RoomCard/RoomCard";

const BuildingRoomsPage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const apiUrl = "http://localhost:5000/api/v1/room/rooms_bld";

    const data = {
      building_name: "Ohio Union",
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
        setData(data);
        // You can work with the data here
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
