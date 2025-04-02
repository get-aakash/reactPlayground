import React, { useState } from 'react'

const Practicestate = () => {
    const [index, setIndex] = useState(0)
    const handleIncrement = ()=>{
        setIndex(index+1)

    }
    const handleDecrement = ()=>{

        index<=0?setIndex(0):setIndex(index-1)
        
    }
    const handleReset = ()=>{
        setIndex(0)
        
    }
  return (
    <div>
        <h3>{index}</h3>

        <button onClick={handleIncrement}>Increment</button>
        <hr />
        <button onClick={handleDecrement}>Decrement</button>
        <hr />
        <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}

export default Practicestate
