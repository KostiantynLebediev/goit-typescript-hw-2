import { Image } from "../App/App.types.js";

export interface ImageGalleryProps {
  items: Image[];
  onImageClick: (url: string, alt: string) => void;
}