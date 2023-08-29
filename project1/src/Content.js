import React from "react";


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

    const handleClick = (e) => {
        console.log(e.target.innerText);
    }

    const handleClick2 = (value) => {
        alert(`Hello ${value}`);
    }

    return (
        <main>
            <p>{handleChangeQuotes()}</p>
            <button onClick={(e) => handleClick(e)}>Click</button>
        </main>
    )
}

export default Content