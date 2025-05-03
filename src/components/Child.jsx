import React, { useState } from 'react'

const Child = ({ message, handleClick }) => {
    return (
        <div>
            <p>{message}</p>

            <div className="div-child">
                <button onClick={handleClick}>Click me!!</button>
            </div>

        </div>
    )
}

export default Child


export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleIncrement = ()=>{
        setCounter(counter+1)

    }

    const handleDecrement = ()=>{
        if(counter>0){
            setCounter(counter-1)
        }
        

    }
    
    return (
        <>
            <div>
                This is the counter app
            </div>
            <div className="counter-class">
                {counter}
            </div>
            <div className="button-class">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>

            </div>
        </>

    )
}

export const ToggleText = ()=>{
    const [displayText, setDisplayText] = useState("Hello, World!")
    const handleOnClick = ()=>{
        displayText==='Hello, World!'?setDisplayText("Goodbye, World!"): setDisplayText("Hello, World!")
    }
    
    return(
        <>
        <div className="display-div">
            {displayText}
        </div>
        <div className="togglebuttondiv">
            <button onClick={handleOnClick}>{displayText==="Hello, World!"?'Switch Text':"Toggle Text"}</button>
        </div>
        </>
    )
}