import React, { useState } from 'react'

export default function Redux00() {
  const [counter, setCounter] = useState(0);

  const minus = () => {
    setCounter(prev => prev - 1);
  }
  const plus = () => {
    setCounter(prev => prev + 1);
  }

  return (
    <div>
      <p>Redux01</p>
      <button onClick={minus}>-</button>
      Value: { counter } 
      <button onClick={plus}>+</button>
    </div>
  );
}
