import React from 'react'

const Entry = (props) => {
    const {country,title, googleMapsLink, dates, text,img } = props.data
    const nums = [1,2,3,4,5]
    const squaredNums = nums.map((item)=> item**2)
    console.log(typeof(squaredNums))

    const names = ['alice', 'bob', 'charlie', 'danielle']
    const capNames = names.map((item)=> item[0].toUpperCase() +item.slice(1))
    console.log(capNames)

    const pokemon = [<h2>Bulbasaur</h2>, <h2>Charmander</h2>, <h2>Squirtle</h2>]
    
    return (
        <div className='container'>
            <div className="travel-container">
                <img src={img.src} alt={img.alt} />
                <div className="travel-description">
                    <div className="img-container">
                        <img src="src/assets/marker.png" alt="" /> 
                        <span>{country}</span>
                        <a href={googleMapsLink}>View on Google maps</a>
                        

                    </div>
                    <h1>{title}</h1>

                    <p className='date'>{dates}</p>
                    <p>{text}</p>
                </div>
            </div>

           

           




        </div>
    )
}

export default Entry
