import React, { useState } from 'react';
import './IncrementComponent.css'

const IncrementComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(preCount => preCount + 1);
  };
  const handleDecrement = () => {
    setCount(preCount => preCount - 1);    
  };

  return (
    <div class="Increment-decrement">
      <button class="increment" onClick={handleIncrement}>Increment</button>
      <h2>Value: {count}</h2>
      <button class="decrement" onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default IncrementComponent;
