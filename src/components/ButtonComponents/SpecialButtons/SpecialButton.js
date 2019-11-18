import React from "react";

/* Display a button element rendering the data being passed down from the parent container on props */ 
const SpecialButton = props => {
  return (
    <span className= "spButton">
      <button className="special_button">
      {props.buttonTextSpecials}
      </button>
    </span>
  )
};

export default SpecialButton;
