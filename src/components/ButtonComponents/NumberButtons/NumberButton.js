import React from "react"; 

const NumberButton = props => {
  console.log(props) 
  return (
    <span className="numberButton">
      <button className="numbers_button">
        {props.stringOfOneNumber}   
      </button>
    </span>
  )
};

export default NumberButton;
