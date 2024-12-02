import React from 'react'
import { MdTitle } from 'react-icons/md'

const Heading = ({title}) => {
  return (
    <div className='text-[#232940] tex-[32px] font-medium flex items-center gap-4 py-16'>
      {title}
      <div className='bg-[#ff4D41] h-[2px] w-[40px] translate-y-1'></div>
    </div>
  )
}

export default Heading
