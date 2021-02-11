import { useLayoutEffect, useRef, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useMeasure } from "./useMeasure";

const App = () => {
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
    </>
  );
};

export default App;
