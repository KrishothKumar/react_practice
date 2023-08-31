import React from "react";
import { useState } from "react";

const Content = () => {
    // function handleChangeQuotes() {
    //     const quotes = [
    //         "That's one small step for a man, a giant leap for mankind.", 
    //         'The love of money is the root of all evil.', 
    //         'The only thing we have to fear is fear itself.', 
    //         'The truth will set you free.'
    //     ];
    //     return quotes[Math.floor(Math.random()*4)];
    // }

    // const [quote, setQuote] = useState(() => handleChangeQuotes());

    // const number = [-2,-1,0,1,2]
    // const numberItems = number.map(n => ({number:n}))
    // const numberItems = number.filter(n => n >= 0)
    // const numberItems = number.filter(n => n >= 0).map(n => ({number:n}))
    // console.log(numberItems)

    const [items, setItems] = useState([
        {id: 1, checked: true, item:"React Learning"}, 
        {id: 2, checked: true, item:"Youtube surfing"}, 
        {id: 3, checked: false, item:"PocketFm"}
    ]);

    // function handleStateQuotes () {
    //     setQuote(handleChangeQuotes())
    // }
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
            <button onClick={(e) => {handleClick(e)}}>Click</button> 

            <p>{quote}</p>
            <button onClick={handleStateQuotes}>Click</button>*/}
            <ul>
                {items.map((items) => (
                        <li>
                            <input type="checkbox" checked={items.checked}/>
                            <label>{items.item}</label>
                            <button>Delete</button>
                        </li>
                    )
                )}
            </ul>
        </main>
    )
}

export default Content