"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon as unknown as string,
  shadowUrl: iconShadow as unknown as string,
});

L.Marker.prototype.options.icon = DefaultIcon;

const locations = [
  {
    name: "Posyandu Rose",
    address: "Desa Cisande RT 1, Kab. Sukabumi, Jawa Barat",
    lat: -6.9012804,
    lng: 106.860324,
  },
  {
    name: "Posyandu Tulip",
    address: "Desa Cisande RT 2, Kab. Sukabumi, Jawa Barat",
    lat: -6.9012804,
    lng: 106.85,
  },
  {
    name: "Posyandu Kamboja",
    address: "Desa Cisande RT 3, Kab. Sukabumi, Jawa Barat",
    lat: -6.9012804,
    lng: 106.84,
  },
  {
    name: "Posyandu Melati",
    address: "Desa Cisande RT 4, Kab. Sukabumi, Jawa Barat",
    lat: -6.91,
    lng: 106.85321,
  },
  {
    name: "Posyandu Anggrek",
    address: "Desa Cisande RT 5, Kab. Sukabumi, Jawa Barat",
    lat: -6.91,
    lng: 106.860324,
  },
];

export default function LeafletMap() {
  return (
    <MapContainer
      center={[-6.9012804, 106.860324]}
      zoom={15}
      style={{ height: "50vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
