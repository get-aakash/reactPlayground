import React from 'react'

function Profile(){
    return(
        <img
      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.au%2FAmazing-Scientists-Inspirational-Charles-Margerison%2Fdp%2F1921752432&psig=AOvVaw0rYaONNFbvEe7t3ui7j-3y&ust=1725267110002000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCjk_-uoYgDFQAAAAAdAAAAABAJ"
      alt="Alan L. Hart"
    />
    )
}

const Gallery = () => {
  return (
   <section>
    <h1>Amazing Scientists</h1>
    <Profile />
    <Profile />
    <Profile />
    <Profile />
   </section>
  )
}

export default Gallery
