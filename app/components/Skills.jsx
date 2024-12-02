import React from 'react'
import Heading from './Heading'

const Skills = () => {
  return (
    <div className='container mx-auto px-4 py-10'>
      <Heading title="Skills" />
      <p className='text-gray-600 -mt-10 mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem explicabo, cupiditate, quaerat laudantium voluptatum hic facere iusto pariatur, numquam nihil sit ullam obcaecati asperiores itaque. Error aperiam quas sapiente aspernatur!</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
            <p>React.js</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-bg-[#ff4D41] h-[4px] w-[90%]'>  </div>
            </div>
        </div>
        <div>
            <p>Node.js</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-bg-[#ff4D41] h-[4px] w-[90%]'>  </div>
            </div>
        </div>
        <div>
            <p>MongoDB</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-bg-[#ff4D41] h-[4px] w-[90%]'>  </div>
            </div>
        </div>
        <div>
            <p>Express</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-bg-[#ff4D41] h-[4px] w-[90%]'>  </div>
            </div>
        </div>
        <div>
            <p>JavaScript</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-bg-[#ff4D41] h-[4px] w-[90%]'>  </div>
            </div>
        </div>
        <div>
            <p>CSS</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-bg-[#ff4D41] h-[4px] w-[90%]'>  </div>
            </div>
        </div>
        <div>
            <p>HTML</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-bg-[#ff4D41] h-[4px] w-[90%]'>  </div>
            </div>
        </div>
        <div>
            <p>Next.js</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-bg-[#ff4D41] h-[4px] w-[90%]'>  </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
