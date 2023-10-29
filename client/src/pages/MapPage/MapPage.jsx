import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./MapPage.css";
import L from "leaflet";
import icon from "../../assets/position-marker.png";

const MapPage = () => {
  const navigate = useNavigate();

  const handleMarkerClick = (event) => {
    const lat = event.latlng.lat;
    // const lng = event.latlng.lng;
    navigate(`/building_map/${Math.floor(lat)}`, {
      state: { id: Math.floor(lat) },
    });
  };

  // Create a custom icon using the image URL
  const customIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [40, 40], // Width and height of the icon
    iconAnchor: [20, 40], // Anchor point (center of the icon)
  });
  return (
    <div style={{ backgroundColor: "#2D3032" }} className="raleway-font">
      <h1>Map</h1>
      <div id="map" style={{ height: "400px" }}>
        <MapContainer
          center={[39.9979, -83.0087]}
          zoom={13}
          style={{ height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[39.9979, -83.0087]}
            eventHandlers={{ click: handleMarkerClick }}
            icon={customIcon}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
