import { useState } from "react"

export default function MarketPlace() {
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  function handleOnClick(){
    setPending(pending+1)
    setTimeout(()=>{
      setPending(n=>n-1) 
      setCompleted(n=>n+1)
    },3000)
  }
  return (
    <>
      <h2>Pending:{pending}</h2>
      <h2>Completed:{completed}</h2>

      <button onClick={handleOnClick}>Buy</button>
    </>

  )
}