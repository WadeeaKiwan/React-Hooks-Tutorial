import { useState } from "react";

const App = () => {
  // const [count, setCount] = useState(() => 10);
  // const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);

  return (
    <div>
      {/* <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button> */}
      <button
        // onClick={() =>
        //   setCount((currentState) => ({
        //     ...currentState,
        //     count: currentState.count + 1
        //   }))
        // }
        // onClick={() =>
        //   setCount((currentState) => ({
        //     count: currentState.count + 1,
        //     count2: currentState.count2
        //   }))
        // }
        onClick={() => {
          setCount((c) => c + 1);
          setCount2((c) => c + 1);
        }}
      >
        +
      </button>
      <div>Count 1: {count}</div>
      <div>Count 2: {count2}</div>
    </div>
  );
};

export default App;
