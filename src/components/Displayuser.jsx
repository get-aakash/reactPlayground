import React, { useEffect, useState } from 'react'

const Displayuser = () => {
    const [data, setData] = useState([])
    const fetchData = async()=>{
        const apiurl = `https://jsonplaceholder.typicode.com/posts`
        try {
            const response = await fetch(apiurl)
            const json = await response.json()
            setData(json)

            
        } catch (error) {
            console.log(error.msg)
        }


    }

    useEffect(()=>{
        fetchData()
    },[])
    console.log(data)

    
    
  return (
    <div>
        {
            data.map((item)=>{
                return(
                    <ul key={item.id}>
                        <li>
                            {item.title}
                        </li>
                        <li>{item.body}</li>
                    </ul>
                )
            })
        }
      
    </div>
  )
}

export default Displayuser
