import React from 'react'
import { useState } from 'react'
import {sculptureList} from "./components/data";

const App = () => {
  const [index,setIndex] = useState(0)
  const [display,setDisplay] = useState(true) 
  let sculpture = sculptureList[index]

  function onButtonClick(){
    setIndex(index+1)
    console.log(sculpture.length)
    if(index===sculptureList.length-1){
      setIndex(0)
    }

  }

  function toggleShowMore(){
    setDisplay(!display)
  }
  return (
    <div>
      <button onClick={onButtonClick}>Next</button>
      <h2>{sculpture.name} by <i>{sculpture.artist}</i></h2>
      <p>{index+1} of {sculptureList.length}</p>
      <button onClick={toggleShowMore}>{display?"ShowDetails":"HideDetails"}</button>
      {!display&&<p>{sculpture.description}</p>}
    </div>
  )
}

export default App
