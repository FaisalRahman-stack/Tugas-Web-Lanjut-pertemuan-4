import React, { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalState';
import './CounterSettings.css';

const CounterSettings = () => {
  const { dispatch } = useContext(GlobalContext);
  const [counterValue, setCounterValue] = useState(0);

  const updateCounter = () => {
    dispatch({ type: 'SET_COUNTER', payload: parseInt(counterValue, 10) });
  };

  return (
    <div className="counter-settings">
      <h2>Pengaturan Counter</h2>
      <div>
        <label>
          Nilai Awal:
          <input
            type="number"
            value={counterValue}
            onChange={(e) => setCounterValue(e.target.value)}
          />
        </label>
        <button onClick={updateCounter}>Atur Nilai</button>
      </div>
    </div>
  );
};

export default CounterSettings;