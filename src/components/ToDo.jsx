import React from 'react'
import { useState } from 'react'

const ToDo = () => {
    const [data, setData] = useState("")
    const [todo, setTodo] = useState([])

    const handleOnChange = (e)=>{
      setData(e.target.value)

    }
    const handleOnSubmit = (e)=>{
      e.preventDefault()
      const newTask = {
        id: Date.now(),
        text: data
      }
      setTodo([...todo, newTask])
    }

    console.log(todo)
    
  return (
    <div>

        <div className="todo-container ">
            <input type="text" onChange={handleOnChange} />
            <button type='submit' onClick={handleOnSubmit}>Add+ </button>
        </div>
        <div className="todo-list">
          <ul>
          {
            todo.map((item)=>{
              return <li key={item.id }>{item.text}</li>

            })
          }
          </ul>
        </div>
      
    </div>
  )
}

export default ToDo
