import React from "react";
import { useState } from "react";

const Content = () => {
    function handleChangeQuotes() {
        const quotes = [
            "That's one small step for a man, a giant leap for mankind.", 
            'The love of money is the root of all evil.', 
            'The only thing we have to fear is fear itself.', 
            'The truth will set you free.'
        ];
        return quotes[Math.floor(Math.random()*4)];
    }

    const [quote, setQuote] = useState(() => handleChangeQuotes());

    function handleStateQuotes () {
        setQuote(handleChangeQuotes())
    }
    // const handleClick = (e) => {
    //     console.log(e.target.innerText);
    // }

    // const handleClick2 = (value) => {
    //     alert(`Hello ${value}`);
    // }
    // const decrementCount = () => {
    //     setCount(count - 1);
    // }

    // const incrementCount = () => {
    //     setCount((precount) => {return precount + 1});
    // }

    return (
        <main>
            {/* <p onDoubleClick={() => handleClick2('Krishoth Kumar')}>{handleChangeQuotes()}</p>
            <button onClick={(e) => {handleClick(e)}}>Click</button> */}

            <p>{quote}</p>
            <button onClick={handleStateQuotes}>Click</button>
        </main>
    )
}

export default Content