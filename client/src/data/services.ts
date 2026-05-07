import serviceAmbulance from "@/images/generated/service-ambulance.png";
import serviceAuto from "@/images/generated/service-auto.png";
import serviceBike from "@/images/generated/service-bike.png";
import serviceCab from "@/images/generated/service-cab.png";
import serviceMovers from "@/images/generated/service-movers.png";
import serviceMovingTruck from "@/images/generated/service-moving-truck.png";
import serviceParcel from "@/images/generated/service-parcel.png";
import servicePremiumCab from "@/images/generated/service-premium-cab.png";

export const services = [
  {
    slug: "bike-taxi",
    title: "Bike Taxi",
    text: "Pune ke short rides ke liye fast aur affordable option.",
    image: serviceBike,
    detail: "Fast solo rides for office commutes, errands and last-mile city travel.",
    highlights: ["Lowest wait time", "Ideal for traffic", "Live tracking"],
  },
  {
    slug: "auto-rickshaw",
    title: "Auto Rickshaw",
    text: "Daily local travel ke liye easy auto rides.",
    image: serviceAuto,
    detail: "Book reliable autos for daily local travel with transparent in-app booking.",
    highlights: ["Budget friendly", "Short trips", "Easy pickup"],
  },
  {
    slug: "cab",
    title: "Cab",
    text: "Office, family aur city travel ke liye comfortable cab rides.",
    image: serviceCab,
    detail: "Comfortable cabs for daily travel, airport runs and family trips.",
    highlights: ["AC rides", "Verified drivers", "Comfort seating"],
  },
  {
    slug: "premium-cab",
    title: "Premium Cab",
    text: "Business travel, airport runs aur premium comfort ke liye.",
    image: servicePremiumCab,
    detail: "Premium cars for business trips, events and high-comfort travel.",
    highlights: ["Premium vehicles", "Professional partners", "Better comfort"],
  },
  {
    slug: "parcel-delivery",
    title: "Parcel Delivery",
    text: "City ke andar parcels safely bhejne ka simple local solution.",
    image: serviceParcel,
    detail: "Move documents, packages and business parcels across the city quickly.",
    highlights: ["Doorstep pickup", "Live status", "Business ready"],
  },
  {
    slug: "moving-services",
    title: "Moving Services",
    text: "Mini truck aur goods support for local shifting and transport.",
    image: serviceMovingTruck,
    detail: "Book mini trucks and three-wheelers for furniture, stock and local shifting.",
    highlights: ["Mini trucks", "Local shifting", "Flexible capacity"],
  },
  {
    slug: "movers-packers",
    title: "Movers & Packers",
    text: "Packing, loading aur shifting support - aaplya Maharashtra sathi.",
    image: serviceMovers,
    detail: "Professional help for packing, loading, transport and moving support.",
    highlights: ["Packing support", "Loading help", "Safer moving"],
  },
  {
    slug: "ambulance",
    title: "Ambulance",
    text: "Emergency support ke liye app-based ambulance access.",
    image: serviceAmbulance,
    detail: "Emergency ambulance access with quick booking and live tracking.",
    highlights: ["Emergency ready", "Fast dispatch", "Track arrival"],
  },
];

export type Service = (typeof services)[number];
