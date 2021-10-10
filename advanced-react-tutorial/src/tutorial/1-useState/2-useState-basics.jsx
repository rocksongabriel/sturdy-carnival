import React, { useState } from "react";


const UseStateBasics = () => {
  const title = "random title"
  const [text, setText] = useState(title)

  const handleClick = () => {
    if (text === "random title") {
      setText("hello react");
    } else {
      setText("random title")
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}


export default UseStateBasics;

/* 
useState
1. useState returns two values: current state, and a function.
2. the current state is simply the current value that the state has.
3. the function is used to update the current state
4. array destructuring syntax is used because it is simple
  e.g: const [currentState, handler] = useState(23)
  here, the handler can be used to change the currentState
  e.g handler("New Value");
  "New Value" will replace the currentState which is 23
5. When calling the useState function, you must pass it an argument,
  this argument is the initial state.

*/