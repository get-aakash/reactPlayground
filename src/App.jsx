import Profile from "./components/Profile";


export default function Gallery(){
  return (
    <div>
      <Profile name="Maria Skłodowska-Curie" imageId="szV5sdG"  profession="physicist and chemist" awards={["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]} discovery="polonium (chemical element)" />
      <Profile name="Katsuko Saruhashi" imageId="YfeOqp2"  profession="geochemist" awards={["Miyake Prize for geochemistry", "Tanaka Prize"]} discovery="a method for measuring carbon dioxide in seawater" />

    </div>
  )
}