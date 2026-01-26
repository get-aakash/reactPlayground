import React from 'react'
import data from "../data"

const Pad = () => {
    const [value, setValue] = React.useState(data)
    const [meme, setMeme] = React.useState({
        id: 1,
        fName: "aakash",
        lName: "acharya"
    })

    

    function handleOnChange(event){
       const {value} = event.currentTarget
       setMeme(prevData=>({...prevData, fName:value}))
       console.log(meme)
    }

    const handleOnClick=(id)=>{

        const clickedSound = value.find((item)=>item.id === id)
        if(clickedSound){
            const audio = new Audio(clickedSound.sound)
            audio.play()
        }



        const result = value.map((item)=>{
            return (
                item.id===id?{...item, on: !item.on}: item
              )  
            
        })
        setValue(result)
        
        


        
       
        
    }
    
  return (
    <div className='sound-container' >
        <input type="text" onChange={handleOnChange} />
        <ul className='sound-pad' >
            
                {
                    value.map((item)=>{
                        return (
                            <li onClick={()=>handleOnClick(item.id)} className='each-pad' style={{backgroundColor:item.on?item.color:"#333"}} key={item.id}>{item.color}</li>
                        )
                    })
                }
            
            
    
    </ul>
        
      
    </div>
  )
}

export default Pad
