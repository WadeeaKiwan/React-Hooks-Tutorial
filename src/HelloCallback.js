import { memo } from "react";
import { useCountRenders } from "./useCountRenders";

// memo is used to rerender the component only when the props are changed
const HelloCallback = memo(({ increment }) => {
  useCountRenders();

  // Use the parameter to pass the value to useCallback function
  return <button onClick={() => increment(5)}>Hello Callback</button>;
});

export default HelloCallback;
