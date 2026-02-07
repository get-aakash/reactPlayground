import React, { useEffect } from 'react'
import { fetchUser } from './axios'

const App = () => {
    const [userData, setUserData] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    useEffect(()=>{
       const loadData = async()=>{
        setLoading(true)
        try {
            const data = await fetchUser()
            setUserData(data)
        } catch (error) {
            setError("Failed to load user")
            
        } finally{
            setLoading(false)
        }

       }

    },[])
    console.log(userData)
  return (
    <div>
      
    </div>
  )
}

export default App
