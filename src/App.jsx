import React from 'react'
import { useState } from 'react'

const App = () => {
  const [person, setPerson] = useState({
    name: "Aakash Acharya",
    city: "Kathmandu",
    score:10
  })

  function handlePlusClick(){
    setPerson({...person, score: person.score+1
    })

  }

  function handleOnChange(e){
    const {name,value} = e.target
    console.log(name,value)
    setPerson({...person,[name]: value})

  }
  return (
    <div>
      <label>Score: <b>{person.score}</b>{" "}<button onClick={handlePlusClick}>+1</button></label>
      <label>Name: </label>
      <input type="text" name='name' value={person.name} onChange={handleOnChange} />


      <label>City: </label>
      <input type="text" name='city' value={person.city} onChange={handleOnChange} />
      <p>{person.name}</p>
      <p>{person.city}</p>
      <p>{person.score}</p>
    </div>
  )
}

export default App
