import { useState, useRef, useLayoutEffect } from "react";

export const useMeasure = (deps) => {
  const [rect, setRect] = useState({});
  const myRef = useRef();

  useLayoutEffect(() => {
    console.log(myRef.current.getBoundingClientRect());
    setRect(myRef.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [rect, myRef];
};
