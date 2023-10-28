import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  const handleMarkerClick = (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    alert(`Marker clicked at Latitude: ${lat}, Longitude: ${lng}`);
  };
  return (
    <div>
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
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <script>var marker = L.marker([51.5, -0.09]).addTo(map);</script>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
