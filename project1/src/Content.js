import React from "react";


const Content = () => {
    function handleChangeQuotes() {
        const quote = ["That's one small step for a man, a giant leap for mankind.", 'The love of money is the root of all evil.', 'The only thing we have to fear is fear itself.', 'The truth will set you free.'];
        return quote[Math.floor(Math.random()*4)];
    }
    
    return (
        <main>
            <p>{handleChangeQuotes()}</p>
        </main>
    )
}

export default Content