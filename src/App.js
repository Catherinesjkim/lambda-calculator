// Pulling in all of the other components
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
// Logo has already been provided for you. Do the same for the remaining components
import React from "react"; // to use JSX
import "./App.css";
import Logo from "./Components/DisplayComponents/Logo";
import Numbers from "./Components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./Components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./Components/ButtonComponents/SpecialButtons/Specials";
import Display from "./Components/DisplayComponents/Display";

function App() {
  return (
    <div className="container">
      <Logo />
      <Display />
        <div className="App">
        <Specials />
        <section className="others">

          <div>
            <Numbers />
          </div>

        <div className="other1">
        <Operators />
        </div>
        </section>
      </div>
    </div>
  );
}

export default App;

/* STEP 5 - Stretch - After you get the components displaying using the provided data file, write your state hooks here.
Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing.
Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
Don't forget to pass the functions (and any additional data needed) to the components as props */