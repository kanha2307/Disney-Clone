import React from 'react'
const baseurl = "https://image.tmdb.org/t/p/original";

const Hrcrd = ({movie}) => {
  return (
    <div>
   
      <img src={baseurl+movie.backdrop_path} className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-105 transition-all duration-200 cursor-pointer ease-in'/>
      <h2 className='w-[110px] md:w-[260px] mt-2 text-sm'>{movie.title}</h2>
        
    </div>
  )
}

export default Hrcrd
