import { useState } from "react";

export default function TrafficLight(){
  const [walk, setWalk] = useState(true)

  function handleClick(){
    
  alert(walk? "Stop is next":"walk is next")
  setWalk(!walk)
  }
  

  return(
    <>
      <button onClick={handleClick}>
        Change to {walk? 'stop':"walk"}
      </button>
      <h1 style={{color: walk? 'darkgreen':"darkred"}}>{walk? 'walk':'stop'}</h1>
    </>
  )

}