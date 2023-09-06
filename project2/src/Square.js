import React from "react";

const Square = ({colour, colourHex, isToggle}) => {
  return (
      <section className="square" style={{textAlign:'center', backgroundColor: colour}}>
        <p style={{color: isToggle ? '#000' : '#FFF'}}>{ colour }</p>
        <p style={{color: isToggle ? '#000' : '#FFF'}}>{colourHex ? colourHex : ``}</p>
      </section>
  );
}

Square.defaultProps = {
    colour: 'Empty Color'
}
export default Square;
