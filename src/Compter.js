import React from 'react';
import './App.css';

function Compter(props) {
  return (
    <div className="App">
      <button onClick={props.change}> {props.value} </button>
    </div>
  );
}

export default Compter;
