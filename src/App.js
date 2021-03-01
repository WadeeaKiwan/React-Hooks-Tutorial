import { useLayoutEffect, useRef, useState, useCallback } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useMeasure } from "./useMeasure";
import HelloCallback from "./HelloCallback";
import Square from "./Square";

const App = () => {
  const [count, setCount] = useState(0);
  // useCallback will rerender the the callback function whenever a dependency has been changed
  const increment = useCallback(
    (n) => {
      // Eliminate count dependency by using the updater function which solves the problem and prevent the increment function from being created at every render by wrapping it with useCallback
      setCount((c) => c + n);

      // We can also return a value in useCallback
      // return 5;
    },
    [setCount]
  );

  // Another use case of using useCallback:
  // useEffect(() => {
  //  to prevent increment from causing firing off for useEffect at every render
  // }, [increment]);

  const favoriteNums = [7, 21, 37];

  const [values, handleChange] = useForm({ email: "", password: "" });

  const [showHello, setShowHello] = useState(true);

  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  // Use it to know the measurements of a DOM node before rendering the data
  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  const [rect, inputRef2] = useMeasure([]);

  return (
    <>
      <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello />}
      <div>
        <input
          ref={inputRef}
          name='email'
          placeholder='Email'
          value={values.email}
          onChange={handleChange}
        />
        <input
          ref={inputRef2}
          type='password'
          name='password'
          placeholder='Password'
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <button
        onClick={() => {
          console.log(inputRef.current);
          inputRef.current.focus();
          hello.current();
        }}
      >
        Focus Ref
      </button>
      <div>
        {/* The function is created on every single render */}
        <HelloCallback increment={increment} />
        <div>Count: {count}</div>
        {favoriteNums.map((n) => {
          return <Square onClick={() => increment(n)} n={n} key={n} />;
        })}
      </div>
    </>
  );
};

export default App;
