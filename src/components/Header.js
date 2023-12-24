import React, { useState } from 'react'
import logo from '../assets/Images/logo.png'
import {HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv} from 'react-icons/hi2'
import { HiPlus,HiDotsVertical } from 'react-icons/hi'
import Headeritem from './Headeritem'
import dev from '../assets/Images/dev-ed-wave.png'

const Header = () => {
    const [toggle, settoggle] = useState(false)
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }]
  return (
    <div className='flex items-center p-5 justify-between'>
        <div className='flex items-center gap-8'>

        
      <img src={logo} className='w-[80px] object-cover md:w-[80px]'/>
     <div className='hidden md:flex gap-5'>{

          menu.map((item)=>(
              <Headeritem Name={item.name} Icon={item.icon}/>
              ))
            }
             </div>
     <div className='md:hidden flex gap-3'>{

          menu.map((item,index)=>(index<3&&
              <Headeritem Name={''} Icon={item.icon}/>
              ))
            }
            <div className='md:hidden' onClick={()=>settoggle(!toggle)}>
                <Headeritem Name={''} Icon={HiDotsVertical}/>
                
    {toggle? <div className='absolute bg-neutral-900 shadow-xl rounded-lg p-5 mt-3 border-[1px] border-gray-800 left-2'>{

          menu.map((item,index)=>index>2&&(
              <Headeritem Name ={item.name} Icon={item.icon}/>
              ))
            }
               </div>:null}
            </div>
             </div>
            </div>
            <div className='bg-slate-400 rounded-[100%] overflow-hidden'>

        <img src={dev} className='h-10 w-10 object-cover'/>
            </div>
    </div>
  )
}

export default Header
