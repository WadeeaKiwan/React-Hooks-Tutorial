import { memo, useRef } from "react";

// memo is used to rerender the component only when the props are changed
const HelloCallback = memo(({ increment }) => {
  const renders = useRef(0);
  console.log("HelloCallback renders: ", renders.current++);

  return <button onClick={increment}>Hello Callback</button>;
});

export default HelloCallback;
