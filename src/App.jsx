import './App.css'
import Contact from './components/Contact'
import Entry from './components/Entry'
import Header from './components/Header'
import MyJoke from './components/MyJoke'
import MyMain from './components/MyMain'
import NavBar from './components/NavBar'
import data from './utils/data'
import jokes from './utils/joke'


function App() {
  const jokeElements = jokes.map((joke,index)=>{
    return <MyJoke key={index} joke={joke} />
  })

  const entryComponent = data.map((data,index)=>{
    return(
      <Entry key={index} data={data} />
    )
  })

  return (
    <>
      <Header />
      <div className="travel-cotainer">
        {entryComponent}
      </div>
      <div className="contacts">
        <Contact 
        img="src/assets/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"

        />
         <Contact 
        img="src/assets/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"

        />
         <Contact 
        img="src/assets/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"

        />
        <Contact 
        img="src/assets/pumpkin.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"

        />

      </div>
      <div className="jokes-container">
        {jokeElements}
      </div>

      
      


    </>
  )


}

export default App
