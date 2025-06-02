"use client"; // Only for Next.js App Router (if applicable)

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapLocations from "./MapLocations";
import Heading from "./Heading";

export default function Map() {
  return (
    <div className="flex flex-col items-center w-full">
      <Heading type="h2">Our Locations</Heading>

      <div className="flex w-full">
        <MapContainer
          center={[14.5995, 120.9842]} // Example: Manila coordinates
          zoom={13}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[14.5995, 120.9842]}>
            <Popup>Hello from Manila!</Popup>
          </Marker>
        </MapContainer>

        <MapLocations />
      </div>
    </div>
  );
}
