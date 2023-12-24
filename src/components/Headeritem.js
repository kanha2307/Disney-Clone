import React from 'react'

const item = ({Name,Icon}) => {
  return (
    <div className='flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8  mt-2'>
     <Icon/>
      <h3 className='text-sm md:block'>{Name}</h3>
    </div>
  )
}

export default item
