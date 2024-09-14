import React from 'react'
import { useState } from 'react'

let nextId = 3

  const initialList = [
    {
      id:0, title: "Big Bellies", seen: false
    },
    {
      id:1, title: "Lunar Landscape", seen: false
    },
    {
      id:2, title: "Terracotta Army", seen: true
    }
  ]
const App = () => {
  const [myList, setMyList] = useState(initialList)
  const [yourList, setYourList] = useState(initialList)

  function handleOnToggleMyList(artworkId,nextSeen){
    const myNextList = [...myList];
    const artwork = myNextList.find(
      a => a.id === artworkId
    );
    artwork.seen = nextSeen;
    setMyList(myNextList);

  }
  function handleOnToggleYourList(artworkId, nextSeen){
    const yourNextList = [...yourList];
    const artwork = yourNextList.find(
      a => a.id === artworkId
    );
    artwork.seen = nextSeen;
    setYourList(yourNextList);

  }

  
  return (
    <div>
      <h1>Art Bucket List</h1>
      <h2>My List of Art to see:</h2>
      <ItemList artworks={myList} onToggle={handleOnToggleMyList} />
      <h2>Your List of Art here</h2>
      <ItemList artworks={yourList} onToggle={handleOnToggleYourList} />
      
    </div>
  )
}

function ItemList({artworks, onToggle}){
  return(
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  )
}

export default App
