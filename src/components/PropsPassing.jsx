import React from 'react'

const PropsPassing = ({data}) => {
   data.map((item,i)=>(
    console.log("Student: "+item.name+" "+"Score: "+item.score)
   ))
    

    
  return (
    <div>
      
    </div>
  )
}

export default PropsPassing

export const MyMovie= ({movies})=>{
    movies.forEach(element => {
        console.log(element)
        
    });
    return(
        <>
        </>
    )
}