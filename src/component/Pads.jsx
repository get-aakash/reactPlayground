import React from 'react'
import data from '../data'

const Pads = () => {
    const [soundData, setSoundData] = React.useState(data)
    const myButton = soundData.map((data)=><button key={data.id}>{data.color}</button>)
  return (
    <div>
        {myButton}
      
    </div>
  )
}

export default Pads
