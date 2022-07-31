import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import useImage from "use-image";
import { Image, Stage, Layer } from "react-konva";
import KonvaImgage from "./ImagePlayGround/KonvaImage";

function App() {
  const [image, setImage] = useState(null);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    console.log(file.type); // this
    setImage(URL.createObjectURL(file));
  };
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
