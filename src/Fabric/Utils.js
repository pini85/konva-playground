import { useState, useEffect, useContext } from "react";
import useAddObject from "./utils/useAddObject";
import useAddImage from "./utils/useAddImage";
import useAddText from "./utils/useAddText";

import { fabric } from "fabric";
import FabricContext from "./FabricContext";

const Utils = () => {
  const [userText, setUserText] = useState("");
  const [amount, setAmount] = useState(1);
  const [buttons, setButtons] = useState([]);
  const { addRect, addCircle } = useAddObject();
  const { addImage } = useAddImage();
  const { addText } = useAddText();
  const canvas = useContext(FabricContext);
  console.log({ canvas });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    // this
    const image = URL.createObjectURL(file);
    addImage(image);
  };

  const rectangle = () => {
    const settings = {
      height: 280,
      width: 200,
      fill: "yellow",
    };
    addRect(settings);
  };
  const circle = () => {
    const settings = {
      radius: 100,
      fill: "red",
    };
    addCircle(settings);
  };
  const text = () => {
    if (!userText) return;
    const settings = {
      fontSize: 20,
      fill: "black",
      backgroundColor: "white",
    };
    addText(userText, settings, true);
  };
  const deleteSelected = () => {
    const activeObject = canvas.current.getActiveObject();
    if (activeObject) {
      canvas.current.remove(activeObject);
      canvas.current.renderAll();
    }
  };
  const deleteAll = () => {
    canvas.current.clear();
  };

  useEffect(() => {
    const buttons = [];

    for (let i = 0; i < amount; i++) {
      buttons.push(
        <button key={i} onClick={rectangle}>
          {i + 1}
        </button>
      );
    }
    setButtons(buttons);
  }, [amount]);

  return (
    <>
      <div>
        <button onClick={rectangle}>Rectangle</button>
        <button onClick={circle}>Cricle</button>
        <input
          type="text"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        />
        <button onClick={text}>Add Text</button>
        <button onClick={deleteSelected}>Delete selected</button>
        <button onClick={deleteAll}>Delete All</button>
        <input
          type="file"
          accept=".doc,.ppt,.pdf,.mp4,image/*"
          id="cameraInput"
          name="cameraInput"
          onChange={(e) => handleFileUpload(e)}
        />
      </div>
      {buttons}
      <button onClick={() => setAmount((prev) => prev + 1)}>New make</button>
    </>
  );
};
export default Utils;
