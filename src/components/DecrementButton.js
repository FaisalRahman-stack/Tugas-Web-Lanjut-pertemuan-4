import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import './DecrementButton.css';

const DecrementButton = () => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <button
      className="decrement-button"
      onClick={() => dispatch({ type: 'DECREMENT' })}
    >
      Kurangi
    </button>
  );
};

export default DecrementButton;