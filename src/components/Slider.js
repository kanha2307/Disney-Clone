import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2';
const Imgburl = "https://image.tmdb.org/t/p/original" ;
const screenw = window.innerWidth
const Slider = () => {
    const [movielist, setmovielist] = useState([])
    
    
    useEffect(() => {
        
        gettrendingmovies();
        
    }, [])
    const elementref = useRef();
    const sliderright=(element)=>{
         element.scrollLeft +=screenw-128
    }
    const sliderleft=(element)=>{
         element.scrollLeft -=screenw-128
    }
    
    const gettrendingmovies=()=>{
        GlobalApi.gettrendingvideos.then(resp=>{
            
            setmovielist(resp.data.results)
            
        })
    }
    return (
    <div>
        <HiChevronLeft className=' hidden md:block absolute mx-8 mt-[150px] text-xl' onClick={()=>sliderleft(elementref.current)}/>
        <HiChevronRight className=' hidden md:block absolute mx-8 mt-[150px] text-xl right-0' onClick={()=>sliderright(elementref.current)}/>


    <div className={`flex overflow-x-auto w-full px-16 py-3 scroll-smooth scrollbar-none `} ref={elementref}>
      {
          movielist.map((item,index)=>(
          
        
              <img src = {Imgburl+item.backdrop_path} className='rounded-md md:min-w-full md:h-[310px]  object-cover md:object-left-top mr-5  hover:border-[3px]  border-gray-300 transition-all ease-in duration-100'/>
            
              ))
            }
      
            </div>
    </div>
  )
}

export default Slider
