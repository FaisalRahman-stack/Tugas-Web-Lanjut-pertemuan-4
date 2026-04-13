import React, { useContext } from 'react';
import { GlobalStateContext } from './GlobalState';

const CounterDisplay = () => {
  const { state } = useContext(GlobalStateContext);

  const warningMessage = () => {
    if (state.max !== null && state.counter > state.max) {
      return `Peringatan: Angka sudah mencapai ${state.counter} (Lebih dari ${state.max}!)`;
    }
    if (state.min !== null && state.counter < state.min) {
      return `Peringatan: Angka sudah mencapai ${state.counter} (Kurang dari ${state.min}!)`;
    }
    return null;
  };

  const getStatus = () => {
    return state.counter % 2 === 0 ? 'GENAP' : 'GANJIL';
  };

  const getProgress = () => {
    if (state.max === null || state.min === null) return 0;
    const range = state.max - state.min;
    return ((state.counter - state.min) / range) * 100;
  };

  return (
    <div>
      <h1>Aplikasi Counter Global State</h1>
      <p>Status Angka: <strong>{getStatus()}</strong></p>
      <div style={{ width: '100%', backgroundColor: '#ccc', height: '20px', margin: '10px 0' }}>
        <div
          style={{
            width: `${getProgress()}%`,
            backgroundColor: 'blue',
            height: '100%',
          }}
        ></div>
      </div>
      {warningMessage() && <p style={{ color: 'red' }}>{warningMessage()}</p>}
      <p>Progres: {Math.min(getProgress(), 100).toFixed(0)}%</p>
    </div>
  );
};

export default CounterDisplay;