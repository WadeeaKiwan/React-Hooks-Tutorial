import { useEffect } from "react";

export const Hello = () => {
  useEffect(() => {
    console.log("render");

    // Cleanup function (called when the component disappears or cleans up the old value and replace it with the new value)
    return () => {
      console.log("Unmount");
    };
  }, []);

  return <div>Hello</div>;
};
