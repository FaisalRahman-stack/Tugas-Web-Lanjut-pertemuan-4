import React from 'react';
import CounterDisplay from './components/CounterDisplay';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import CounterHistory from './components/CounterHistory';
import TombolAksiCustom from './TombolAksiCustom'; // Corrected the import path for TombolAksiCustom to be relative to the src directory

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Aplikasi Counter Global State</h1>
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
        <CounterDisplay />
      </div>
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
        <IncrementButton />
        <DecrementButton />
        <TombolAksiCustom />
      </div>
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
        <CounterHistory />
      </div>
    </div>
  );
}

export default App;
