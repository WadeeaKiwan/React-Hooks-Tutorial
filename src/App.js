import { useLayoutEffect, useRef, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";

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
          type='password'
          name='password'
          placeholder='Password'
          value={values.password}
          onChange={handleChange}
        />
      </div>
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
