import React from 'react'
import { useState } from 'react'

const App = () => {
  const [answer, setAnswer] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  async function handleOnSubmit(e){
    e.preventDefault()
    setIsSending(true)
    await sendMessage(answer)
    setIsSending(false)
    setIsSent(true)
  }
  if(isSent){
    return <h1>Thank you for the feedback!!</h1>
  }
  return (
    <div>
      <h3>How was your stay at The Prancing Pony?</h3>
      <textarea disabled={isSending} onChange={e=>setAnswer(e.target.value)} />
      <br />
      <button onClick={handleOnSubmit} disabled={isSending}>Send</button>
      {isSending && <p>Sending...</p>}
    </div>
  )
}

function sendMessage(answer){
  return new Promise (resolve=>{
    setTimeout(resolve, 2000)
  })
}

export default App
