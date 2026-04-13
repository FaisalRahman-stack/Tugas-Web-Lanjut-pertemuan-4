import React, { useContext, useState } from 'react';
import { GlobalContext } from './GlobalState';

const CounterSettings = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [min, setMin] = useState(state.min !== null ? state.min : '');
  const [max, setMax] = useState(state.max !== null ? state.max : '');
  const [initialValue, setInitialValue] = useState(state.counter);

  const handleSetMin = () => {
    if (max !== '' && min >= max) {
      alert('Minimum value must be less than the maximum value.');
      return;
    }
    dispatch({ type: 'SET_MIN', payload: min === '' ? null : Number(min) });
  };

  const handleSetMax = () => {
    if (min !== '' && max <= min) {
      alert('Maximum value must be greater than the minimum value.');
      return;
    }
    dispatch({ type: 'SET_MAX', payload: max === '' ? null : Number(max) });
  };

  const handleSetInitialValue = () => {
    if (initialValue < min || (max !== '' && initialValue > max)) {
      alert('Initial value must be within the minimum and maximum limits.');
      return;
    }
    dispatch({ type: 'SET_COUNTER', payload: Number(initialValue) });
  };

  return (
    <div>
      <h3>Pengaturan Counter</h3>
      <div>
        <label>
          Batas Minimum:
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            placeholder="Tidak ada batas"
          />
        </label>
        <button onClick={handleSetMin}>Atur Minimum</button>
      </div>
      <div>
        <label>
          Batas Maksimum:
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            placeholder="Tidak ada batas"
          />
        </label>
        <button onClick={handleSetMax}>Atur Maksimum</button>
      </div>
      <div>
        <label>
          Nilai Awal:
          <input
            type="number"
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
          />
        </label>
        <button onClick={handleSetInitialValue}>Atur Nilai</button>
      </div>
    </div>
  );
};

export default CounterSettings;