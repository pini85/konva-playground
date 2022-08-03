import { createRef } from "react";

import MyCanvas from "./MyCanvas";
import Utils from "./Utils";
import FabricContext from "./FabricContext";

const Fabric = () => {
  return (
    <FabricContext.Provider value={createRef("hi")}>
      <MyCanvas />
      <Utils />
    </FabricContext.Provider>
  );
};
export default Fabric;
