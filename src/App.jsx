import React from 'react'
import { useState } from 'react'
import {sculptureList} from "./components/data";

const App = () => {
  const [index,setIndex] = useState(0)
  let sculpture = sculptureList

  function onButtonClick(){
    setIndex(index+1)

  }
  return (
    <div>
      <button onClick={onButtonClick}>Next</button>
      <h2>{sculpture[index].name} by <i>{sculpture[index].artist}</i></h2>
      <p>{index} of {sculpture.length}</p>
    </div>
  )
}

export default App
