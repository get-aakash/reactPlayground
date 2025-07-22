import './App.css'
import Contact from './components/Contact'
import Entry from './components/Entry'
import Header from './components/Header'
import MyMain from './components/MyMain'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
      <Header />
      <Entry />
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


    </>
  )


}

export default App
