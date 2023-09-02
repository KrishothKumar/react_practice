import React from "react";

const Footer = ({length}) => {
    // const date = new Date();
    return (
        // <footer>Copyright &copy; {date.getFullYear()}</footer>
        <footer>{length} List {(length ===1 || length ===0)? 'Item': 'Items'}</footer>
    )
}

export default Footer