import type { Office } from "@/models/office";

export const OFFICES: Office[] = [
  {
    country: "Canada",
    officeName: "Designo Central Office",
    address1: "3886 Wellington Street",
    address2: "Toronto, Ontario M9C 3J5",
    phone: "+1 253-863-8967",
    mail: "contact@designo.co",
    latLong: [43.78281, -80.1322819],
  },
  {
    country: "Australia",
    officeName: "Designo AU Office",
    address1: "19 Balonne Street",
    address2: "New South Wales 2443",
    phone: " (02) 6720 9092",
    mail: "contact@designo.au",
    latLong: [-27.6064306, 153.0657767],
  },
  {
    country: "United Kingdom",
    officeName: "Designo UK Office",
    address1: "13 Colorado Way",
    address2: "Rhyd-y-fro SA8 9GA",
    phone: " 078 3115 1400",
    mail: "contact@designo.uk",
    latLong: [53.7102, -1.3419],
  },
];
