import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'

function App() {



  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/bloglist' element={<BlogList />}/>
      <Route path='/blogs/:id' element={<BlogPost />}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>

  )
}

export default App
