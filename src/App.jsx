
import './App.css'
import Practice, { filterAvailableBooks, filterByGenre, Movies } from './components/Practice'
import Practicestate from './components/Practicestate'
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
    </>

  )
}

export default App
