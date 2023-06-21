import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const icon = new L.Icon({
  iconUrl: "/assets/shared/desktop/icon-marker.png",
});

interface Props {
  position: LatLngExpression;
  style?: React.CSSProperties;
}

export default function LocationMap({ position, style }: Props) {
  return (
    <MapContainer center={position} zoom={13} style={style}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}></Marker>
    </MapContainer>
  );
}
