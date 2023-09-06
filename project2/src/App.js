import { useState } from 'react';
import './App.css';

function App() {
  const [colour, setColour] = useState();
  const [toggle, setToggle] = useState('black');
  const handleInput = (e) => {
    setColour(e.target.value)
  }

  const handleToggle = (e) => {
    if(toggle == 'black'){
      setToggle('white')
    } else {
      setToggle('black')
    }
  }

  return (
    <div className="App">
      <div className='square' style={{textAlign:'center', backgroundColor: colour}}>
      <p style={{color:toggle}}>{colour ? colour : `Empty`}</p>
      </div>
      <input onChange={(e) => handleInput(e)} type='text'/>
      <button onClick={(e) => handleToggle(e)}> Toggle Test colour</button>
    </div>
  );
}

export default App;
