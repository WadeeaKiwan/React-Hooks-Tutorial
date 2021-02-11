import { useEffect, useRef, useState } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

export const Hello = () => {
  // We can use useRef to store any value
  const renders = useRef(0);

  console.log("Hello renders: ", renders.current++);

  const [count, setCount] = useState(
    // Use the initializer function of useState to reduce from running at every single render
    () => JSON.parse(localStorage.getItem("count")) || 0
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    console.log("render");

    // Cleanup function (called when the component disappears or cleans up the old value and replace it with the new value)
    return () => {
      console.log("Unmount");
    };
  }, []);

  const [rect, divRef] = useMeasure([data]);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count +</button>
      <button onClick={() => setCount((c) => (c >= 1 ? c - 1 : c))}>Count -</button>
      <div>Count: {count}</div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "Loading..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
    </div>
  );
};
