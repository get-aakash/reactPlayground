import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery'
import Avatar from './components/Avatar'

export default function App() {
  

  return (
    <div>
      <Avatar person={{ name: 'Lin Lanying', imageId: 'YfeOqp2' }} size={100} />
      <Avatar person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }} size={80} />
      <Avatar person={{ name: 'Katsuko Saruhashi', imageId: '1bX5QH6' }} size={50} />

    </div>
   
     
      

    
  )
}


