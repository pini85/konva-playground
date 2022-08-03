import { useContext } from "react";
import FabricContext from "../FabricContext";
import { fabric } from "fabric";
const useCanvaImage = () => {
  const canvas = useContext(FabricContext);

  const addImage = (image, settings) => {
    fabric.Image.fromURL(image, function (img) {
      canvas.current.add(img).setActiveObject(img).renderAll();
    });
  };
  return { addImage };
};
export default useCanvaImage;
