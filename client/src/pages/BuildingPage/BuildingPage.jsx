import React, { useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import { Polygon } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";

function calculateCentroid(polygon) {
  let cx = 0,
    cy = 0;
  for (const [x, y] of polygon) {
    cx += x;
    cy += y;
  }
  cx /= polygon.length;
  cy /= polygon.length;
  return [cx, cy];
}

function rotatePolygon(polygon, angleInDegrees) {
  const centroid = calculateCentroid(polygon);
  const rotatedPolygon = [];

  for (const [x, y] of polygon) {
    const dx = x - centroid[0];
    const dy = y - centroid[1];
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    const cosTheta = Math.cos(angleInRadians);
    const sinTheta = Math.sin(angleInRadians);

    const xPrime = dx * cosTheta - dy * sinTheta + centroid[0];
    const yPrime = dx * sinTheta + dy * cosTheta + centroid[1];
    rotatedPolygon.push([xPrime, yPrime]);
  }
  return rotatedPolygon;
}

const BuildingPage = (props) => {
  const navigate = useNavigate();
  const id = navigate.id;

  const latConst = 1 / 364000;
  const longConst = 1 / 288200;
  const center = [39.9979, -83.0087];

  const polygon = [
    [39.9979 + latConst * 300, -83.0087 + longConst * 150],
    [39.9979 + latConst * 300, -83.0087 - longConst * 150],
    [39.9979 - latConst * 300, -83.0087 - longConst * 150],
    [39.9979 - latConst * 300, -83.0087 + longConst * 150],
  ];
  const hallway = [
    [39.9979 + latConst * 75, -83.0087 + longConst * 150],
    [39.9979 + latConst * 75, -83.0087 - longConst * 150],
    [39.9979 - latConst * 75, -83.0087 - longConst * 150],
    [39.9979 - latConst * 75, -83.0087 + longConst * 150],
  ];
  const blackOptions = { color: "black" };
  const redOptions = { color: "red" };
  const purpleOptions = { color: "purple" };

  const multiFloor = true;

  const rotatedPolygon = rotatePolygon(polygon, -10);
  const rotatedHallway = rotatePolygon(hallway, -10);
  return (
    <>
      <div>
        <h1>building</h1>
        <div id="map" style={{ height: "400px" }}>
          <MapContainer center={center} zoom={26} style={{ height: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LayersControl position="topright">
              <LayersControl.BaseLayer name="Floor 1">
                <LayerGroup>
                  <Polygon
                    pathOptions={blackOptions}
                    positions={rotatedPolygon}
                  />
                  <Polygon
                    pathOptions={blackOptions}
                    positions={rotatedHallway}
                  />
                </LayerGroup>
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name="Floor 2">
                <Polygon pathOptions={redOptions} positions={rotatedPolygon} />
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name="Floor 3">
                <Polygon
                  pathOptions={purpleOptions}
                  positions={rotatedPolygon}
                />
              </LayersControl.BaseLayer>
            </LayersControl>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default BuildingPage;
