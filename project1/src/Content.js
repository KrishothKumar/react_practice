import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"

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

    const handleCheck = (id) => {
        // console.log(`id: ${id}`)
        // const itemsNew = items.map((items) => items.id == id ? {id:items.id,checked:!items.checked,item:items.item}: items)
        const itemsNew = items.map((items) => items.id == id ? {...items,checked:!items.checked}: items)

        setItems(itemsNew)
    }

    const handleDelete = (id) => {
        // console.log(`id: ${id}`)
        // const itemsNew = items.map((items) => items.id == id ? {id:items.id,checked:!items.checked,item:items.item}: items)
        // const itemsNew = items.filter((items) => items.id !== id).map((items) => items)
        const itemsNew = items.filter((items) => items.id !== id)

        setItems(itemsNew)
    }
    return (
        <main>
            {/* <p onDoubleClick={() => handleClick2('Krishoth Kumar')}>{handleChangeQuotes()}</p>
            <button onClick={(e) => {handleClick(e)}}>Click</button> 

            <p>{quote}</p>
            <button onClick={handleStateQuotes}>Click</button>*/}
            <ul>
                {items.map((items) => (
                        <li className="item" key={items.id}>
                            <input type="checkbox" onChange={() => {handleCheck(items.id)}} checked={items.checked}/>
                            <label>{items.item}</label>
                            <FaTrashAlt role = "button" onClick={() => handleDelete(items.id)}/>
                        </li>
                    )
                )}
            </ul>
        </main>
    )
}

export default Content