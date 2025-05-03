
import './App.css'
import { Counter, ToggleText } from './components/child'
import Parent from './components/Parent'
import Practice, { filterAvailableBooks, filterByGenre, Movies } from './components/Practice'
import Practicestate from './components/Practicestate'
import ToDo from './components/ToDo'
import { data } from './utils/data'

function App() {



  const availableBooks = filterAvailableBooks(data)
  console.log(availableBooks)

  const genreFilter = filterByGenre(data,"Fiction")
  console.log("Genre", genreFilter)

  return (
    <>
      <Practice />
      <Movies />
      <Practicestate />
      <ToDo />
      <Parent />

      <Counter />

      <ToggleText />
      
    </>

  )
}

export default App
