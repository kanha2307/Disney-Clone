import React from 'react'
const baseurl = "https://image.tmdb.org/t/p/original";

const Moviecard = ({movie}) => {
  return (
    <>
      <img src={baseurl+movie.poster_path} className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-105 transition-all duration-200 cursor-pointer ease-in'/>
    </>
  )
}

export default Moviecard
