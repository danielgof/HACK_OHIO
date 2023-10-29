import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BuildingRoomsPage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
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
      {location.state.title}
      <div>BuildingRoomsPage</div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.room_name}</li>
        ))}
      </ul>
    </>
  );
};

export default BuildingRoomsPage;
