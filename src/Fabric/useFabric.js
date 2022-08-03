import { useContext, useCallback, useRef, createRef } from "react";
import FabricContext from "./FabricContext";
import { fabric } from "fabric";
const useFabric = (settings) => {
  const amount = [1, 2];
  // const elementsRef = useRef(amount.map(() => createRef()));
  // console.log({ elementsRef });

  const canvas = useContext(FabricContext);
  // canvas.current = [...elementsRef.current];
  // console.log({ canvas });
  const fabricRef = useCallback((element) => {
    //loop over amount and create a new canvas
    // for (let i = 0; i < amount.length; i++) {
    console.log("hi");
    if (!element) return canvas.current?.dispose();
    canvas.current = new fabric.Canvas(element, settings);
    // console.log("hi", elementsRef.current[i]);
    // }
    // console.log({ elementsRef });
  }, []);
  return fabricRef;
};
export default useFabric;
