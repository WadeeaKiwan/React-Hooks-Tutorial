import { memo } from "react";
import { useCountRenders } from "./useCountRenders";

const Square = memo(({ n, increment }) => {
  useCountRenders();

  return <button onClick={() => increment(n)}>{n}</button>;
});

export default Square;
