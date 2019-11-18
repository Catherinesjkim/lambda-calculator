import React, { useState } from "react";

export default function Display() {
  const [count, setCount] = useState(0);
    {/* Display any props data here */
    return (
      <div calssName="display"> 
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count +1)}>
          Click me
        </button>
      </div>
    );
  }
};
