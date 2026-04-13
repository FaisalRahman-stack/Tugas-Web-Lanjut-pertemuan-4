import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import './CounterDisplay.css';

const CounterDisplay = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="counter-display">
      <h1>Nilai Counter: {state.counter}</h1>
      <p>Batas Minimum: {state.min}</p>
      <p>Batas Maksimum: {state.max}</p>
    </div>
  );
};

export default CounterDisplay;