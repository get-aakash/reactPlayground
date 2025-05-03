import React from 'react'
import {  movies, students } from '../utils/data'
import PropsPassing, { MyMovie } from './PropsPassing'




const Practice = () => {

   

    const filteredData = students.filter(item => item.passed === true)


    return (
        <div>
            {filteredData.map((item, i) => (
                <h3 key={i}>Student: {item.name}, Score: {item.score}</h3>
            ))}
            <PropsPassing data={filteredData} />


        </div>
    )
}

export default Practice


export const Movies = () => {

    const num = [1,2,3,4]
    let sum = 0

    const filteredData = movies.filter(item => item.rating >= 7)
    console.log(filteredData)

    num.forEach(element => 
         sum = sum +element
    );
    
    console.log(sum)
    
    return (
        <>
            <h3>Movies</h3>
            {
                movies.map((item) => (
                    <h3 key={item.id}>Title: {item.title}, Genre: {item.genre}, Rating: {item.rating}</h3>
                ))
            }
            <MyMovie movies={filteredData} />
        </>



    )
}

export const filterAvailableBooks = (data) => {
    return data.filter(book => book.available === true)
}

export const filterByGenre = (data,genre)=>{
    return(
        data.filter(book=>book.genre === genre)
    )

}
