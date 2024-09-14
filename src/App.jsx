import React from 'react'
import { useState } from 'react'

const App = () => {

  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Dongra",
    email: "barbaradongra.com"
  })

  function handleFirstNameChange(e){
    setPerson({...person,firstName:e.target.value})
  }
  function handleLastNameChange(e){
    setPerson({...person, lastName: e.target.value})
  }
  function handleEmailChange(e){
    setPerson({...person, email: e.target.value})
  }
  return (
    <div>

      <label>First Name</label>
      <input type="text" value={person.firstName} onChange={handleFirstNameChange} />
      
      <label>Last Name</label>
      <input type="text" value={person.lastName} onChange={handleLastNameChange}/>
      
      <label>Email:</label>
      <input type="email" value={person.email} onChange={handleEmailChange} />
      <p>{person.firstName}</p>
      <p>{person.lastName}</p>
      <p>{person.email}</p>
    </div>
  )
}

export default App
