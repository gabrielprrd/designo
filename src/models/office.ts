import type { LatLngExpression } from "leaflet";

export interface Office {
  country: string;
  officeName: string;
  address1: string;
  address2: string;
  phone: string;
  mail: string;
  latLong: LatLngExpression;
}
