import React from 'react'

const Joke = (props) => {
    const {setup, punchline} = props
  return (
    <div>

        <h3>{setup}</h3>
        <p>{punchline}</p>
        <hr />
      
    </div>
  )
}

export default Joke
