import { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  const [count, setCount] = useState(
    // Use the initializer function of useState to reduce from running at every single render
    () => JSON.parse(localStorage.getItem("count")) || 0
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  });

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count +</button>
      <button onClick={() => setCount((c) => (c >= 1 ? c - 1 : c))}>Count -</button>
      <div>Count: {count}</div>
      <div>{!data ? "Loading..." : data}</div>
      <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello />}
      <div>
        <input name='email' placeholder='Email' value={values.email} onChange={handleChange} />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={values.password}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default App;
