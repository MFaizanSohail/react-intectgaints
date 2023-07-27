import React, { useState } from 'react';
import './IncrementComponent.css'
import Button from '@mui/material/Button';

const IncrementComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(preCount => preCount + 1);
  };
  const handleDecrement = () => {
    setCount(preCount => preCount - 1);    
  };

  return (
    <>
    <div class="Increment-decrement">
      <button class="increment" onClick={handleIncrement}>Increment</button>
      <h2>Value: {count}</h2>
      <button class="decrement" onClick={handleDecrement}>Decrement</button>
    </div>
    <div>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>Disabled</Button>
      <Button variant="contained" href="#contained-buttons">Link</Button>
    </div>
    </>
  );
};

export default IncrementComponent;
