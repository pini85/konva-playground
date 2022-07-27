import logo from "./logo.svg";
import "./App.css";
import React from "react";
import useImage from "use-image";
import { Image, Stage, Layer } from "react-konva";
import KonvaImgage from "./ImagePlayGround/KonvaImage";

function App() {
  return (
    <div className="App">
      <Stage width={300} height={300}>
        <Layer>
          <KonvaImgage src="https://randomwordgenerator.com/img/picture-generator/g33815e6df811c258a606a9a313eb798de88de92031fc196fe0bb1d4bd4fa6be7c59d43cfbfedd1268b185db543d21ba8_640.jpg" />
        </Layer>
      </Stage>
      <input
        type="file"
        accept=".doc,.ppt,.pdf,.mp4,image/*"
        id="cameraInput"
        name="cameraInput"
      />
    </div>
  );
}

export default App;
