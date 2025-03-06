import { StaticImageData } from "next/image";

export type Location = {
  name?: string;
  image?: string | StaticImageData;
  propertyCount?: string;
  showOverlay?: boolean;
}[];

export const LocationInstance = [];
