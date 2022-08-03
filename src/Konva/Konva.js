import React, { useState } from "react";
import useImage from "use-image";
import { Image, Stage, Layer } from "react-konva";
import KonvaImgage from "./ImagePlayGround/KonvaImage";
const Konva = () => {
  const [image, setImage] = useState(null);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    console.log(file.type); // this
    setImage(URL.createObjectURL(file));
  };
  return (
    <>
      <Stage width={300} height={300}>
        <Layer>
          <KonvaImgage src={image} />
        </Layer>
      </Stage>
      <input
        type="file"
        accept=".doc,.ppt,.pdf,.mp4,image/*"
        id="cameraInput"
        name="cameraInput"
        onChange={(e) => handleFileUpload(e)}
      />
    </>
  );
};
export default Konva;
