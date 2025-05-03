import React from 'react'
import Child from './child'

const Parent = () => {
    const message = 'hello from parent! '

    const handleClick = ()=>{
        alert('Button clicked in child!!')

    }
  return (
    <div>
        <Child message = {message} handleClick={handleClick} />
      
    </div>
  )
}

export default Parent
