import React from 'react'
import disney from '../assets/Images/disney.png'
import marvel from '../assets/Images/marvel.png'
import national from '../assets/Images/nationalG.png'
import pixar from '../assets/Images/pixar.png'
import starwar from '../assets/Images/starwar.png'

import disneyv from '../assets/Videos/disney.mp4'
import marvelv from '../assets/Videos/marvel.mp4'
import nationalv from '../assets/Videos/national-geographic.mp4'
import pixarv from '../assets/Videos/pixar.mp4'
import starwarv from '../assets/Videos/star-wars.mp4'



const Productionhouse = () => {
const mlist = [
   { id:1,
    image:disney,
    video:disneyv,
   },
   { id:2,
    image:marvel,
    video:marvelv,
   },
   { id:3,
    image:national,
    video:nationalv,
   },
   { id:4,
    image:pixar,
    video:pixarv,
   },
   { id:1,
    image:starwar,
    video:starwarv,
   },
   

]






  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
      {
        mlist.map((item)=>(
          <div className='border-[2px] border-gray-600 rounded-lg hover:scale-105 duration-300 ease-in-out transition-all cursor-pointer relative'>
            <img src={item.image} className='w-full '/>
            <video src= {item.video} autoPlay loop playsInline className='absolute top-0 rounded-md opacity-0 hover:opacity-60'  />
            
           </div>
        ))
      }
    </div>
  )
}

export default Productionhouse
