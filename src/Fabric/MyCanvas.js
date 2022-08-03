import useFabric from "./useFabric";
import { useRef, createRef } from "react";

const MyCanvas = () => {
  const settings = {
    width: 500,
    height: 500,
    backgroundColor: "purple",
  };

  const fabricRef = useFabric(settings);
  console.log({ fabricRef });

  // const canvases = [1, 2];
  // const displayCanvases = canvases.map((canvas, index) => {
  //   return (
  //     <div key={index}>
  //       <h1>Canvas {index + 1}</h1>
  //       <canvas ref={() => fabricRef(index)} />,
  //     </div>
  //   );

  return (
    <>
      {/* {displayCanvases} */}
      <canvas ref={fabricRef} />
    </>
  );
};

export default MyCanvas;
