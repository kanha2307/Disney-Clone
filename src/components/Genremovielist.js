import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

const Genremovielist = () => {
  return (
    <div>
      {
        GenresList.genere.map((item,index)=>index<=8&&(
            <div className=' p-2 px-3 md:px-3 '>
                <h2 className='font-bold'>{item.name}</h2>
                <MovieList genreId = {item.id} index = {index}/>
            </div>

        ))
      }
    </div>
  )
}

export default Genremovielist
