import React from 'react'
import { useState } from 'react'

const App = () => {
  const [person, setPerson] = useState([
    {
      id: 1,
      name: "Marta Colvin Andrade"
    },
    {
      id: 2,
      name: "Lamidi Olonade Fakeye"
    },
    {
      id: 3,
      name: "Louise Nevelson"
    },

  ])

  function handleDelete(id){
    const data = person.filter((element)=>
      element.id !== id
    )
    console.log(data)
    setPerson(data)
  }
  return (
    <div>
      <ul>
        {person.map(element=>(
          <li key={element.id}>{element.name} <button onClick={()=>handleDelete(element.id)}>Delete</button></li>
        ))}
      </ul>

    </div>
  )
}

export default App

