import React from 'react'

const MyButton = () => {
    const user = {
        name: "Aakash Acharya",
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90
    }

    const myVariable = [
        {
            name: "Banana",
            id : 1
        },
        {
            name: "Apple",
            id : 2
        },

    ]
    const onClickHandle = (fruitName)=>{
        alert(`You clicked on: ${fruitName}`)

    }

    const listedItems = myVariable.map((item)=>
        <li key={item.id} onClick={()=>onClickHandle(item.name)}>{item.name}</li>
    )
    console.log(typeof(listedItems))
    return (
        <div>
            <button>This is a Button</button>
            <h1>{user.name}</h1>
            <img className='avatar' src={user.imageUrl} style={{ height: user.imageSize, width: user.imageSize }} alt="" />

            <ul>{listedItems}</ul>
        </div>
    )
}

export default MyButton
