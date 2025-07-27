import './App.css'
import Contact from './components/Contact'
import Entry from './components/Entry'
import Header from './components/Header'
import Joke from './components/Joke'
import MyMain from './components/MyMain'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
      <Header />
      <Entry img= {{src: "https://scrimba.com/links/travel-journal-japan-image-url", alt: "Mount Fuji"}}
             title="Mount Fuji"
             country="Japan"
             googleMapsLink= "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" 
             dates = "12 Jan, 2021 - 24 Jan, 2021" 
             text = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
              />
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

      <Joke setup="I got my daughter a fridge for her birthday."
            punchline= "I can't wait to see her face light up when she opens it."  />
      <Joke setup= "How did the hacker escape the police?" punchline= "He just ransomware!" />
      <Joke setup= "Why don't pirates travel on mountain roads?" punchline= "Scurvy."/>
      <Joke setup= "Why do bees stay in the hive in the winter?" punchline= "Swarm." />
      <Joke setup= "What's the best thing about Switzerland?" punchline= "I don't know, but the flag is a big plus!" />
      


    </>
  )


}

export default App
