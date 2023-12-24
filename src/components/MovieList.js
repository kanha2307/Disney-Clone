import React, { useEffect, useState,useRef} from 'react'
import GenresList from '../Constant/GenresList'
import Moviecard from './Moviecard'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2';
import Hrcrd from './Hrcrd';
const screenw = window.innerWidth


const MovieList = ({genreId,index}) => {

  const [MovieList, setMovieList] = useState([])
  const elementref = useRef(null);
  const sliderright=(element)=>{
    element.scrollLeft +=500;
}
const sliderleft=(element)=>{
    element.scrollLeft -=500;
}
  useEffect(() => {
   getmoviesbygenreid();
    
  }, [])
  

    const getmoviesbygenreid=()=>{
        GlobalApi.getmoviesbygenreid(genreId).then(resp=>{
            setMovieList(resp.data.results)
        })
    }
  return (

    <div className='relative flex'>
         <HiChevronLeft className={` hidden md:block absolute mx-8 ${index%3==0?' mt-[90px]' : 'mt-[170px]'}  font-bold text-xl z-[10]`} onClick={()=>sliderleft(elementref.current)}/>

    <div ref={elementref} className='flex overflow-x-auto scrollbar-none scroll-smooth gap-3 md:gap-5 pt-5 pb-5 mt-2'>
      {MovieList.map((item)=>(
        <>{
            
          index%3==0?<Hrcrd movie={item}/>: <Moviecard movie={item}/>
        }
        </>
          ))}
    </div>
          <HiChevronRight className={`hidden md:block absolute mx-8 ${index%3==0?' mt-[90px]' : 'mt-[170px]'}  font-bold text-xl right-0 z-[10]`} onClick={()=>sliderright(elementref.current)}/>
          </div>
  )
}

export default MovieList
