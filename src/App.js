import "./App.css";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Konva from "./Konva/Konva";
import useFabric from "./Fabric/useFabric";
import { fabric } from "fabric";
import Fabric from "./Fabric/Fabric";

function App() {
  // const [canvas, setCanvas] = useState(null);
  let handleFileUpload;
  let x;
  // const ref = useFabric((canvas) => {
  //   handleFileUpload = (e) => {
  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       const image = new Image();
  //       image.src = e.target.result;
  //       image.onload = function () {
  //         const img = new fabric.Image(image);
  //         canvas.add(img).setActiveObject(img).renderAll();
  //       };
  //     };
  //     reader.readAsDataURL(e.target.files[0]);
  //   };
  // });
  const canvas = useRef(null);
  // const handleFileUpload = (e) => {
  //   const reader = new FileReader();
  //   reader.onload = function (e) {
  //     const image = new Image();
  //     image.src = e.target.result;
  //     image.onload = function () {
  //       const img = new fabric.Image(image);
  //       canvas.add(img).setActiveObject(img).renderAll();
  //     };
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };

  useLayoutEffect(() => {
    x = new fabric.Canvas(canvas.current, {
      height: 800,
      width: 800,
      backgroundColor: "blue",
    });
  }, []);

  const addRect = () => {
    console.log({ canvas });
    console.log({ x });
    const rect = new fabric.Rect();
    rect.set({
      height: 100,
      width: 100,
      fill: "red",
    });
    console.log({ rect });
    x.add(rect).setActiveObject(rect).renderAll();
  };

  return (
    <div className="App">
      <Fabric />
      {/* <canvas ref={canvas} />
      <button onClick={addRect}>Rectangle</button>
      <input
        type="file"
        accept=".doc,.ppt,.pdf,.mp4,image/*"
        id="cameraInput"
        name="cameraInput"
        onChange={(e) => handleFileUpload(e)}
      /> */}
    </div>
  );
}

export default App;
