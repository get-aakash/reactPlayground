import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/themeSlice'

const ThemeChange = () => {
    const value = useSelector(state=>state.themeSlice.theme)
    const dispatch = useDispatch()
  return (
    <div>
        <h3>{value}</h3>
        <button onClick={()=> dispatch(toggleTheme())}>ThemeToggle</button>
      
    </div>
  )
}

export default ThemeChange
