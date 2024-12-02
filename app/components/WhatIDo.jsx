import React from 'react'
import Heading from './Heading'

const WhatIDo = () => {
  return (
    <div className='container mx-auto py-10 px-4'>
      <Heading title="What I Do" />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D44] text-white'>
          <h2 className='font-medium text-[28px]'>Full Stack Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit earum quibusdam facilis vitae, eligendi, obcaecati consectetur fuga vero praesentium culpa saepe dolores. Illo nam, qui ducimus rem nostrum quibusdam quo.</p>
        </div>
        <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D44] text-white'>
          <h2 className='font-medium text-[28px]'>Frontend Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit earum quibusdam facilis vitae, eligendi, obcaecati consectetur fuga vero praesentium culpa saepe dolores. Illo nam, qui ducimus rem nostrum quibusdam quo.</p>
        </div>
        <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D44] text-white'>
          <h2 className='font-medium text-[28px]'>Backend Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit earum quibusdam facilis vitae, eligendi, obcaecati consectetur fuga vero praesentium culpa saepe dolores. Illo nam, qui ducimus rem nostrum quibusdam quo.</p>
        </div>
      </div>
    </div>
  )
}

export default WhatIDo
