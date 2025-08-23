import React from 'react'
import data from '../data'

const Pads = () => {
    const [soundData, setSoundData] = React.useState(data)
    
    function toggleColor(id){
      setSoundData(soundData.map((item)=>{
        return(
          item.id === id? {...item, on:!item.on}: item
        )
      }))
      
      
    }
  return (
    <div className='pad-container'>
        {soundData.map((item)=><button  key={item.id} onClick={()=>toggleColor(item.id)} style={{backgroundColor:item.on?item.color:""}}>{item.color}</button>)}
      
    </div>
  )
}

export default Pads
