import { useEffect, useRef } from "react";

export const Hello = () => {
  // We can use useRef to store any value
  const renders = useRef(0);

  console.log("Hello renders: ", renders.current++);

  useEffect(() => {
    console.log("render");

    // Cleanup function (called when the component disappears or cleans up the old value and replace it with the new value)
    return () => {
      console.log("Unmount");
    };
  }, []);

  return <div>Hello</div>;
};
