import Header from "./Header";

function App() {
  // function handleChangeQuotes() {
  //   const quote = ["That's one small step for a man, a giant leap for mankind.", 'The love of money is the root of all evil.', 'The only thing we have to fear is fear itself.', 'The truth will set you free.'];
  //   return quote[Math.floor(Math.random()*4)];
  // }
  return (
    <div>
        {/* <p>{handleChangeQuotes()}</p> */}
        <Header/>
    </div>
  );
}

export default App;
