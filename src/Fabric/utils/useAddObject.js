import { useContext, useEffect } from "react";
import { fabric } from "fabric";
import FabricContext from "../FabricContext";

const useAddObject = () => {
  const canvas = useContext(FabricContext);
  const addRect = (settings, center) => {
    const rect = new fabric.Rect(settings);
    canvas.current.add(rect);
    center && canvas.current.centerObject(rect);
    canvas.current.renderAll();
  };
  const addCircle = (settings, center) => {
    const circle = new fabric.Circle(settings);
    canvas.current.add(circle);
    center && canvas.current.centerObject(circle);
    canvas.current.renderAll();
  };
  return { addRect, addCircle };
};
export default useAddObject;
