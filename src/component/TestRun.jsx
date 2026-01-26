import React from 'react'
import {itemsData} from "../myData"
import { counterData } from '../myData'
import { usersData } from '../myData'

const TestRun = () => {

    const [value, setvalue] = React.useState(itemsData)
    

    const handleButtonClick = (id)=>{
        const newValue = value.map((item)=>
            item.id===id? {...item,selected:!item.selected}: item

        
        )
        setvalue(newValue)
        
       
        
    }
    console.log(value)

    const listItem = value.map((item)=><button onClick={()=>handleButtonClick(item.id)} key={item.id}>{item.name}{item.selected? "✅": "❌"}</button>)
  return (
    <div >
        <ul className='button-class'>
            {listItem}
        </ul>
      
    </div>
  )
}


export const IncrementCounter = ()=>{
    const [counter, setCounter] = React.useState(counterData)

    function handleOnClick(id){
        const newCount = counter.map((item)=>item.id===id? {...item, count: item.count+1} : item)
        setCounter(newCount)
    }

    const counterList = counter.map((item)=><li>{item.name} {item.count} <button onClick={()=>handleOnClick(item.id)}> + </button></li>)
    return (
        <div>
            <ul>
                {counterList}
            </ul>
        </div>
    
    )

}

export default TestRun


export const ControlledInput = ()=>{
    const [userInput, setUserInput] = React.useState()
    const [myList, setMylist] = React.useState([])

    const handleOnchange = (e)=>{
        setUserInput(e.target.value)

    }

    const handleOnClick = ()=>{
        setMylist(prevItems=> [
            ...prevItems,{
      id: Date.now(),
      name: userInput
    }
        ])

    }
    console.log(myList)
    return(
        <div>
            <input type="text" placeholder='Enter your input' onChange={handleOnchange} />
            <button onClick={handleOnClick}>Add</button>

        </div>
    )
}

export const DisplayUser = ()=>{

    const [users, setUsers] = React.useState(usersData)

    const userList = users.map(item=> <li key={item.id}>{item.name}</li>)

    const handleOnChange = ()=>{

    }
    return (
        <div>
            <div className="search-user">
                <input type="text" placeholder='search user here...' onChange={handleOnChange} />
            </div>
            <ul>
                {userList}
            </ul>

        </div>
    )
}

