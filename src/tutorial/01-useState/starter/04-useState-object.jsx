import { useState } from "react";
import { people } from "../../../data";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "ashraf",
    age: 39,
    hubby: "working as developer",
  });

  const showPerson = () => {
    setPeople({ name: "ali", age: 28, hubby: "web designer" });
  };
  return (
    <>
      <div>
        <h1>{people.name}</h1>
        <h1>{people.age}</h1>
        <h1>{people.hubby}</h1>
        <button type="button" className="btn" onClick={showPerson}>
          show ali
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
