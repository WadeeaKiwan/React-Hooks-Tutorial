import { memo } from "react";
import { useCountRenders } from "./useCountRenders";

const Square = memo(({ n, onClick }) => {
  useCountRenders();

  return <button onClick={onClick}>{n}</button>;
});

export default Square;
