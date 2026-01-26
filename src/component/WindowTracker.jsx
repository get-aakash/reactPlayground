import React from 'react'

const WindowTracker = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    React.useEffect(()=>{
        window.addEventListener("resize", function(){
            setWindowWidth(window.innerWidth)
        })

    },[])
  return (
   <h1>Window Width: {windowWidth}</h1>
  )
}

export default WindowTracker
