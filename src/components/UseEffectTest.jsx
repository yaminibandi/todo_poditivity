import { useCallback } from "react";
import { useEffect, useState } from "react";

export default function UseEffectTest() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("Count updated", { count });
  //   }, [count]);

  const increment = useCallback(()=>{

  }, [])
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
