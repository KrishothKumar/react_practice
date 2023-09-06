import React from "react";

const Square = ({colour, colourHex, isToggle}) => {
  return (
      <section className="square" style={{textAlign:'center', backgroundColor: colour, color: isToggle ? '#000' : '#FFF'}}>
        <p>{ colour }</p>
        <p>{colourHex ? colourHex : ``}</p>
      </section>
  );
}

Square.defaultProps = {
    colour: 'Empty Color'
}
export default Square;
