import { memo } from "react";
import { useCountRenders } from "./useCountRenders";

// memo is used to rerender the component only when the props are changed
const HelloCallback = memo(({ increment }) => {
  useCountRenders();

  return <button onClick={increment}>Hello Callback</button>;
});

export default HelloCallback;
