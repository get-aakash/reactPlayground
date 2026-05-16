import React, { useEffect, useLayoutEffect } from 'react'
import { fetchUser } from './axios'
import { Button, Card } from 'react-bootstrap'

const App = () => {
    const [userData, setUserData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [search, setSearch] = React.useState("")

    const handleOnChange = (e)=>{
        setSearch(e.target.value.toLowerCase())
        

    }
    
   const filteredUsers = userData.filter(user =>
    user.name.toLowerCase().includes(search)
  )
    
    
    
    useEffect(() => {
        const loadData = async () => {
            setLoading(true)
            try {
                const data = await fetchUser()
                setUserData(data)
            } catch (error) {
                setError("Failed to load user")

            } finally {
                setLoading(false)
            }

        }
        loadData()


    }, [])
    return (
        <div>
            <div className="serach-container">
                <input type="text" placeholder='search here...'  onChange={handleOnChange}/>
            </div>
            {
                filteredUsers.map((user) => {
                    return (
                        <Card key={user.id} style={{ width: '18rem' }}>
                            
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                    {user.email}
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    )
                })
            }

        </div>
    )
}

export default App
