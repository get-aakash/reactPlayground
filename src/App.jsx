import './App.css'
import Pad from './component/Pad'
import Practice from './component/Practice'
import RandomQuoteGenerator from './component/RandomQuoteGenerator'
import TestRun, { ControlledInput, DisplayUser, IncrementCounter } from './component/TestRun'
import WindowTracker from './component/WindowTracker'



function App() {

  

  return (
    <>
   
  
    <Pad />
    <Practice />
    <RandomQuoteGenerator />
    <TestRun />
    <IncrementCounter />
    <ControlledInput />
    <DisplayUser />
    
    </>
  )


}

export default App
