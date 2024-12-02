import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import spotify from '../assets/spotify.jpeg'
import food from '../assets/food.jpeg'
import Auth from '../assets/Auth.png'
import coding from '../assets/codeing.jpeg'
import Hero from '../assets/E-com.jpeg'

const CreateWork = () => {
  return (
    <div className='container mx-auto px-4 py-10'>
      <Heading title='Projects' />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Left Side: Reduced Height Coding Image */}
        <div className="relative md:col-span-1">
          <Image src={coding} alt="Coding Project Image" className="rounded-lg shadow-lg w-full h-[470px] object-cover" />
          <div className="bg-black bg-opacity-60 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
            <p className="text-white text-xl font-semibold">Coding Project</p>
          </div>
        </div>

        {/* Right Side: Grid of Other Project Images */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          <div className="relative">
            <Image src={spotify} alt="Spotify Project" layout="responsive" width={500} height={300} className="rounded-lg shadow-lg" />
            <div className="bg-black bg-opacity-60 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold">Spotify Project</p>
            </div>
          </div>
          
          <div className="relative">
            <Image src={food} alt="Food Project" layout="responsive" width={500} height={300} className="rounded-lg shadow-lg" />
            <div className="bg-black bg-opacity-60 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold">Food Project</p>
            </div>
          </div>

          <div className="relative">
            <Image src={Auth} alt="Auth Project" layout="responsive" width={500} height={300} className="rounded-lg shadow-lg" />
            <div className="bg-black bg-opacity-60 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold">Auth Project</p>
            </div>
          </div>

          <div className="relative">
            <Image src={Hero} alt="MERN Project" layout="responsive" width={500} height={300} className="rounded-lg shadow-lg" />
            <div className="bg-black bg-opacity-60 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold">MERN Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateWork
