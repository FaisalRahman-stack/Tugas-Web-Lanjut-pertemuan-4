import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import './IncrementButton.css';

const IncrementButton = () => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <button
      className="increment-button"
      onClick={() => dispatch({ type: 'INCREMENT' })}
    >
      Tambah
    </button>
  );
};

export default IncrementButton;