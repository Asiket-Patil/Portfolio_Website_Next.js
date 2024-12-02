"use client";
import React from 'react';
import Image from 'next/image';
import HeroImage from '../assets/Hero.jpg';
import Typewriter from 'typewriter-effect';
import Button from '../components/Button';

const Hero = () => {
  return (
    <div className="h-screen w-full relative">
      <Image
        src={HeroImage}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className='container mx-auto px-4 h-full flex items-center relative z-10'>
        <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
          <div>
            <h1 className='text-5xl'>I am Asiket Patil</h1>
            <h4 className='text-2xl mt-3'>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Web Developer",
                    "Frontend Developer",
                    "Backend Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h4>
          </div>
          <div className='bg-[#ff4D41] h-[2px] w-[40px]'></div>
          <div>
            <p>Full-Stack Web Developer with a strong foundation in front-end and back-end technologies </p>
            <Button link='#' text="Learn more"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
