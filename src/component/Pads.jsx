import React from 'react'
import data from "../data"

const Pads = () => {
  return (
    <div className='pad-container'>
        {data.map((item)=>{
            return(
                <div className="sound-pad" style={{backgroundColor: item.color}}>{item.color}</div>
            )
        })}
        
      
    </div>
  )
}

export default Pads
