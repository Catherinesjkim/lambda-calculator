import React from "react"; // from node modules(bits of code): react-dom (yarn or npm install)

// Props will always be an object or collection of all the attributes we write in our component
const OperatorButton = props => {
    return (
    <button className="operations_button">{props.char}
    {props.operatorObject.value}
    </button>
  )
}

export default OperatorButton;

  
  

