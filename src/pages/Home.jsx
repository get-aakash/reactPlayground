import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome to homepage</h1>
            <Link to='/about'><Button>Click me!!</Button></Link>

        </div>
    )
}

export default Home
