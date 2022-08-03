import { createContext, useContext, useEffect, useRef, useState } from "react";
const MyContext = createContext();

export const ContextStore = (props) => {
  console.log({ props });
  const ref = useRef();
  return <MyContext.Provider value={ref}>{props.children}</MyContext.Provider>;
};
