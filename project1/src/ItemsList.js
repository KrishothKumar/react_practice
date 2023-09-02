import React from "react";
import ListItems from "./ListItems";

const ItemsList = ({items, handleCheck, handleDelete}) => {
    return (
        <ul>
            {items.map((items) => (
                    <ListItems key={items.id} items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
                )
            )}
        </ul>
    )
}

export default ItemsList