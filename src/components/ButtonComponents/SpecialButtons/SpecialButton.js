import React from "react";
// import "./data";

/* Display a button element rendering the data being passed down from the parent container on props */ 
const SpecialButton = props => {
  return (
    <button className="special_button">
    {props.buttonTextSpecials}
    </button>
  )
};

export default SpecialButton;
