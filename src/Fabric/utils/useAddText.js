import { useContext } from "react";
import { fabric } from "fabric";
import FabricContext from "../FabricContext";
const useAddText = () => {
  const canvas = useContext(FabricContext);

  const addText = (userText, settings, center) => {
    const text = new fabric.Textbox(userText, settings);
    center && canvas.current.centerObject(text);
    canvas.current.add(text).setActiveObject(text).renderAll();
  };
  return { addText };
};
export default useAddText;
