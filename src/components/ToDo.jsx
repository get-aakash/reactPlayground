import React, { useState } from 'react'

const ToDo = () => {
    const [task, setTask] = useState("")
    const [data, setData] = useState([])

    const handleOnChange = (e)=>{
        setTask(e.target.value)
    }

    const handleAddOnCLick = ()=>{
        setData([...data, task])
    }

    
    console.log(data)
    return (
        <div>
            <div>
                <p>Enter your input here</p>

                <input type="text" onChange={handleOnChange} />

            </div>
            <div>
                <button onClick={handleAddOnCLick}>Add+</button>

            </div>

            <ul>
                {
                    data?.map((item,i)=>{
                        return (
                            <li key={i}>{item} <button>Delete</button></li>

                        )
                    })
                }
               
            </ul>



        </div>
    )
}

export default ToDo
