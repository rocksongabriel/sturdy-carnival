import React, { useState } from "react";
import { data } from "../../data";


const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople);
  }

  return <>
    {
      people.map((person) => {
        return <div className="item" key={person.id}>
          <h4>{person.name}</h4>
          <button onClick={() => removeItem(person.id)}>remove</button>
        </div>
      })
    }
    <button className="btn" onClick={() => setPeople([])}>
      Clear Items
    </button>
    <button className="btn" onClick={() => setPeople(data)}>
      Load All Items
    </button>
  </>
}


export default UseStateArray;