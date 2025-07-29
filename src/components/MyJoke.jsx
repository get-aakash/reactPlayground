import React from 'react'

const MyJoke = (props) => {
  console.log(props)
    const {Punchline, Setup} = props.joke 
  return (
    <div>

        <h3>{Setup}</h3>
        <p>{Punchline}</p>
        <hr />
      
    </div>
  )
}

export default MyJoke
