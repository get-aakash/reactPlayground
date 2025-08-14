import React from 'react'
import data from '../data'

const Pads = () => {
    const [soundData, setSoundData] = React.useState(data)
    
    function toggleColor(on){
        const value = !on.on
        setSoundData[{...soundData, value}]
        console.log(soundData)
    }
  return (
    <div className='pad-container'>
        {soundData.map((item)=><button  key={item.id} onClick={()=>toggleColor(item)} style={{backgroundColor:item.on?item.color:""}}>{item.color}</button>)}
      
    </div>
  )
}

export default Pads
