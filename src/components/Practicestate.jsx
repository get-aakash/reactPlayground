import React, { useState } from 'react'

const Practicestate = () => {
    const [index, setIndex] = useState(0)
    const [logData, setLogData] = useState([])
    const handleIncrement = ()=>{
        setIndex(index+1)
        setLogData([...logData, index])

    }
    const handleDecrement = ()=>{

        index<=0?setIndex(0):setIndex(index-1)
        setLogData([...logData, index])
        
    }
    const handleReset = ()=>{
        setIndex(0)
        setLogData([])
        
    }

    const handleLogCount = ()=>{
        setLogData([...logData, index])
        console.log(logData)
        


    }
  return (
    <div>
        <h3>{index}</h3>

        <button onClick={handleIncrement}>Increment</button>
        <hr />
        <button onClick={handleDecrement}>Decrement</button>
        <hr />
        <button onClick={handleReset}>Reset</button>
        <hr />
        <p>LogData: {logData}</p>
        <button onClick={handleLogCount}>Log Counter</button>

        
      
    </div>
  )
}

export default Practicestate
