import React, {useState} from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'random message',
  })

  const changeMessage = () => {
    setPerson({...person, message: "new message"});
  }

  return <>
    <h2>{ person.name }</h2>
    <h3>{ person.age }</h3>
    <p>{ person.message }</p>

    <button className="btn" onClick={changeMessage}>
      Change Message
    </button>
  </>
}

export default UseStateObject;