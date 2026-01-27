import './App.css'
import Pad from './component/Pad'
import Practice from './component/Practice'
import RandomQuoteGenerator from './component/RandomQuoteGenerator'
import TestRun, { ControlledInput, DisplayUser, IncrementCounter, LoginForm, UserSelect } from './component/TestRun'
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
    <UserSelect />
    <LoginForm />
    
    </>
  )


}

export default App
