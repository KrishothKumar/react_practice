import React from "react";
import { useState } from "react";

const Content = () => {
    function handleChangeQuotes() {
        const quote = [
            "That's one small step for a man, a giant leap for mankind.", 
            'The love of money is the root of all evil.', 
            'The only thing we have to fear is fear itself.', 
            'The truth will set you free.'
        ];
        return quote[Math.floor(Math.random()*4)];
    }

    const [count, setCount] = useState(9);
    // const handleClick = (e) => {
    //     console.log(e.target.innerText);
    // }

    // const handleClick2 = (value) => {
    //     alert(`Hello ${value}`);
    // }
    const decrementCount = () => {
        setCount(count - 1);
    }

    const incrementCount = () => {
        setCount((precount) => {return precount + 1});
    }

    return (
        <main>
            {/* <p onDoubleClick={() => handleClick2('Krishoth Kumar')}>{handleChangeQuotes()}</p>
            <button onClick={(e) => {handleClick(e)}}>Click</button> */}

            <p>The truth will set you free.</p>
            <button>Click</button>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </main>
    )
}

export default Content