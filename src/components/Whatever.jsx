import { useState } from "react";

const Whatever = () => {
  const [state, setState] = useState("Initial state");
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState("Button clicked")}>Click Me</button>
    </div>
  );
};

export default Whatever;
