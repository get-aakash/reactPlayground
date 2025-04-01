
import './App.css'
import Practice, { filterAvailableBooks, Movies } from './components/Practice'
import { data } from './utils/data'

function App() {



  const availableBooks = filterAvailableBooks(data)
  console.log(availableBooks)

  return (
    <>
      <Practice />
      <Movies />
    </>

  )
}

export default App
