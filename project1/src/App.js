import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Krishoth Kumar";
  return (
    <div className="App">
      <header className="App-header">
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
        {/* This JSON expression are not declerded in {}
        <h1>{{a:1, b:2}}</h1> */}
        
        {/* In this boolean conditions are not applied
        <h1>{1 == 1}</h1> */}

        <h1>{name}</h1>
      </header>
    </div>
  );
}

export default App;
