import React, { useEffect } from 'react'
import {itemsData} from "../myData"
import { counterData } from '../myData'
import { usersData } from '../myData'
import { selectUserData } from '../myData'
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
    const [search, setSearch] = React.useState("")

    

    const handleOnChange = (e)=>{
        setSearch(e.target.value)


    }

    const filteredItem = users.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredItem)
    const userList = filteredItem.map(item=> <li key={item.id}>{item.name}</li>)
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

export const UserSelect = ()=>{

    const [userData, setUserData] = React.useState(selectUserData)


    function handleOnClick(id){
       setUserData(prevData=>prevData.map((item)=>item.id===id?{...item,selected: !item.selected}: item))
        
    }
    
        const count = (userData.filter(item => item.selected).length)



    
    const mappedUser = userData.map((item)=> <li onClick={()=>handleOnClick(item.id)} key={item.id}>{item.name} {item.selected? "✅":"❌"}    </li>)
    return(
        <div>
            <ul>
                {mappedUser}

            </ul>
            <p>selected: {count}</p>

        </div>
    )
}

export const LoginForm = ()=>{
    const [userData, setUserData] = React.useState({})
    const [error, setError] = React.useState(false)

    const handleOnChange = (e)=>{
       const {name, value}= e.target
       setUserData({...userData, [name]:value})


    }
    

    

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        if(userData.password.length<< 6 || !userData.email.includes("@")){
            setError(prevData=> !prevData)
        }
        
        
        
        
    }
    return (
        <div>
            <form action="" onSubmit={handleOnSubmit}>
            <label>Email:</label>
            <input type="email" name='email' placeholder='Enter your email here' onChange={handleOnChange} />
            {error&& <p>email is invalid</p>}
            <label>Password:</label>
            <input type="password" name='password' placeholder='Enter your password here' onChange={handleOnChange} />
            {error&& <p>password is invalid</p>}
            
            <button type='submit' >Submit</button>
            </form>

        </div>
    )
}

