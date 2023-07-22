import { useState } from "react";
const UseStateBasics = () => {
  let [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count++);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleCount} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseStateBasics;
