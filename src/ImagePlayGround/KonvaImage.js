import useImage from "use-image";
import { Image } from "react-konva";
const KonvaImgage = ({ src, x, y }) => {
  const [image] = useImage(src);
  return <Image image={image} x={x} y={y} width={300} height={300} />;
};
export default KonvaImgage;
