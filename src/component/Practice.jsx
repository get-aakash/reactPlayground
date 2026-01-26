import React from 'react'
import WindowTracker from './WindowTracker'

const Practice = () => {
    const [starwarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    const [show, setShow] = React.useState(true)
    


    React.useEffect(() => {
        fetch(`https://swapi.py4e.com/api/people/${count}/`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))

    }, [count])

    
    console.log(starwarsData)
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starwarsData, null, 2)}</pre>
        <button onClick={()=> setShow(prevData=>!prevData)}>
            Toggle Window Tracker
        </button>
        {show?<WindowTracker />: console.log(show)}
        </div>
    )
}

export default Practice
