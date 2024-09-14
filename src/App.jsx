import React from 'react'
import { useState } from 'react'

const App = () => {

  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Dongra",
    email: "barbaradongra.com",
    profile:{
      title: "Mrs",
      age: "32",
      gender: "female"
    }
  })

  function handleOnChange(e){
    console.log(e.target)
    const{name,value} = e.target
    setPerson({...person, profile:{
      ...person.profile,[name]:value
    }})
  }
  return (
    <div>

      <label>First Name</label>
      <input type="text" name='firstName' value={person.firstName} onChange={handleOnChange} />
      
      <label>Last Name</label>
      <input type="text" name='lastName' value={person.lastName} onChange={handleOnChange}/>
      
      <label>Email:</label>
      <input type="email" name='email' value={person.email} onChange={handleOnChange} />

      
      <label>Title:</label>
      <input type="email" name='title' value={person.profile.title} onChange={handleOnChange} />
      
      <label>Age:</label>
      <input type="text" name='age' value={person.profile.age} onChange={handleOnChange} />
      
      <label>Gender:</label>
      <input type="text" name='gender' value={person.profile.gender} onChange={handleOnChange} />
      <p>{person.firstName}</p>
      <p>{person.lastName}</p>
      <p>{person.email}</p>
      <p>{person.profile.title}</p>
      <p>{person.profile.age}</p>
      <p>{person.profile.gender}</p>
    </div>
  )
}

export default App
