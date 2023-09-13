import { useState } from "react";
import Image from "next/image";
import { type } from "os";

type Props = {
  showAllPhotos: boolean;
};

export default function PlaceGallery(props: Props) {
  const [showAllPhotos, setShowAllPhotos] = useState<boolean>(false);

  if (showAllPhotos) {
    return <></>;
  }
  return <></>;
}
