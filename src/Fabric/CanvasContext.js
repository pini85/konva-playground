import {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import { fabric } from "fabric";

const CanvasContext = createContext(null);

const useCanvas = () => {
  const canvas = useContext(CanvasContext);
  // if (!canvas) {
  //   throw new Error("useCanvas must be used within a CanvasProvider");
  // }
  return canvas;
};
const CanvasProvider = ({ children }) => {
  const [canvas, setCanvas] = useState(null);
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    console.log(canvasRef.current);
    canvasRef.current = new fabric.Canvas(canvasRef.current, {
      height: 800,
      width: 800,
      backgroundColor: "blue",
    });
    // setCanvas(initCanvas());
  }, []);
  // const initCanvas = () =>
  //   new fabric.Canvas("canvas", {
  //     height: 800,
  //     width: 800,
  //     backgroundColor: "pink",
  //     fireRightClick: true,
  //     fireMiddleClick: true,
  //   });
  return (
    <CanvasContext.Provider value={canvasRef}>
      <canvas ref={canvasRef} />
      {children}
    </CanvasContext.Provider>
  );
};

export { CanvasProvider, useCanvas };

// import {
//   createContext,
//   useContext,
//   useState,
//   useLayoutEffect,
//   useRef,
// } from "react";
// import { fabric } from "fabric";

// const CanvasContext = createContext(null);

// const useCanvas = () => {
//   const canvas = useContext(CanvasContext);
//   if (!canvas) {
//     throw new Error("useCanvas must be used within a CanvasProvider");
//   }
//   return canvas;
// };
// const CanvasProvider = ({ children }) => {
//   const [canvas, setCanvas] = useState(null);
//   useLayoutEffect(() => {
//     setCanvas(initCanvas());
//   }, []);
//   const initCanvas = () =>
//     new fabric.Canvas("canvas", {
//       height: 800,
//       width: 800,
//       backgroundColor: "pink",
//       fireRightClick: true,
//       fireMiddleClick: true,
//     });
//   return (
//     <CanvasContext.Provider value={canvas}>{children}</CanvasContext.Provider>
//   );
// };

// export { CanvasProvider, useCanvas };
