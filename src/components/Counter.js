import React, {useState} from "react";

function Counter(){
  const [count, setCount] = useState(0)
   function handleclick(){
    setCount(count +1)

   }
  return <button onClick={handleclick}>click me  {count}</button>
}

export default Counter