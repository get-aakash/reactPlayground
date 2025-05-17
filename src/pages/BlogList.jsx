import React from 'react'
import {posts} from "../utils/blogData"
import { Link } from 'react-router-dom'

const BlogList = () => {
    console.log(posts)

  return (
    <div className='blog-list '>
        <ul>
            {
            posts.map(post=>{
                return(
                    <li key={post.id}>
                        <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                        
                        </li>
                )
            })
        }

        </ul>
        
      
    </div>
  )
}

export default BlogList
