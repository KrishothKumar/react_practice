import { useState } from 'react';
import colorNames from 'colornames';
import Square from './Square';
import './App.css';

function App() {
  const [colour, setColour] = useState();
  const [colourHex, setcolourHex] = useState();
  const [isToggle, setIsToggle] = useState(true);

  return (
    <div className='App'>
      <Square colour={colour} colourHex={colourHex} isToggle={isToggle}/>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name</label>
        <input autoFocus onChange={(e) => {setColour(e.target.value); setcolourHex(colorNames(e.target.value))}} type='text'/>
        <button onClick={(e) => setIsToggle(!isToggle)}> Toggle Text colour</button>
      </form>
    </div>
  );
}

export default App;
