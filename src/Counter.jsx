import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    // Intentionally throw an error
    throw new Error('Count reached 5! 💥');
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
