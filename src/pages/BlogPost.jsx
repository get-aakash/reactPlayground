import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../utils/blogData'

const BlogPost = () => {
    const {id} = useParams()
    const data = posts.find((p)=>p.id === id)
  return (
    <div>
        {data && 

            <>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
            </>
           
        }
      
    </div>
  )
}

export default BlogPost
