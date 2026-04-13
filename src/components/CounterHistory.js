import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import './CounterHistory.css';

const CounterHistory = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const resetHistory = () => {
    dispatch({ type: 'RESET_HISTORY' });
  };

  return (
    <div className="counter-history">
      <h2>Riwayat Counter</h2>
      <ul>
        {state.history.map((value, index) => (
          <li key={index}>Nilai: {value}</li>
        ))}
      </ul>
      <button onClick={resetHistory}>Reset Riwayat</button>
    </div>
  );
};

export default CounterHistory;