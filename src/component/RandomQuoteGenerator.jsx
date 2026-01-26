import React from 'react'

const RandomQuoteGenerator = () => {
    const [myQuote, setMyQuote] = React.useState([
  { id: 1, text: "Stay hungry, stay foolish" },
  { id: 2, text: "Code is like humor. When you have to explain it, it’s bad." },
  { id: 3, text: "First, solve the problem. Then, write the code." },
  { id: 4, text: "Experience is the name everyone gives to their mistakes." }
])
const [data, setData] = React.useState()
    


function handleOnClick(){
   const i = (Math.floor(Math.random()* myQuote.length))
   console.log(i)
   
   setData(myQuote[i].text)


}
  return (
    <div>

        <div className="quote-container">
            <h3>{data}</h3>
        </div>

        <div className="button-container">
            <button onClick={handleOnClick}>Next Quote</button>

        </div>
      

    </div>
  )
}

export default RandomQuoteGenerator
