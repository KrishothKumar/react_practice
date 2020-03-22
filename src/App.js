import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComp from './Component/FunctionComp';
// import {Greet} from './Component/Greet'; #It import the function without export default
// import MY from './Component/Greet';  #It import Greet function with alias name

function App() {
  return (
    <div className="App">
      <FunctionComp/>
      {/* Default Page */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
