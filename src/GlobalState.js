import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  counter: 0,
  history: [],
  min: 0, // Default minimum value
  max: 100, // Default maximum value
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementValue = action.payload || 1; // Default ke 1 jika payload tidak diberikan
      if (isNaN(state.counter)) {
        return {
          ...state,
          counter: 0,
        };
      }
      if (state.max !== null && state.counter + incrementValue > state.max) {
        return state; // Cegah melebihi batas maksimum
      }
      return {
        ...state,
        counter: state.counter + incrementValue,
        history: [...state.history, state.counter + incrementValue],
      };
    case 'DECREMENT':
      const decrementValue = action.payload || 1; // Default ke 1 jika payload tidak diberikan
      if (isNaN(state.counter)) {
        return {
          ...state,
          counter: 0,
        };
      }
      if (state.min !== null && state.counter - decrementValue < state.min) {
        return state; // Cegah kurang dari batas minimum
      }
      return {
        ...state,
        counter: state.counter - decrementValue,
        history: [...state.history, state.counter - decrementValue],
      };
    case 'RESET':
      return {
        ...state,
        counter: 0,
        history: [],
      };
    case 'RESET_HISTORY':
      return {
        ...state,
        history: [],
      };
    case 'SET_MIN':
      return {
        ...state,
        min: action.payload,
      };
    case 'SET_MAX':
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
};

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};