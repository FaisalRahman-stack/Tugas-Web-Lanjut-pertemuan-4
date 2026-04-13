import React, { useContext } from 'react';
import { GlobalStateContext } from './GlobalState';

const CounterHistory = () => {
  const { state, dispatch } = useContext(GlobalStateContext);

  const handleResetHistory = () => {
    dispatch({ type: 'RESET_HISTORY' });
  };

  return (
    <div>
      <h3>History</h3>
      <ul>
        {state.history.map((value, index) => (
          <li key={index}>Counter: {value}</li>
        ))}
      </ul>
      <button onClick={handleResetHistory}>Reset History</button>
      <p>Total aktivitas klik: {state.history.length}</p>
    </div>
  );
};

export default CounterHistory;