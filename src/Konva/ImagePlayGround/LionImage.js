import useImage from "use-image";
import { Image, Stage, Layer } from "react-konva";
const LionImage = ({ x, y }) => {
  const [image] = useImage("https://konvajs.org/assets/lion.png");
  return <Image image={image} x={x} y={y} />;
};
export default LionImage;
