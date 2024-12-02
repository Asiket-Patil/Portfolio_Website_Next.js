import React from 'react';
import Heading from './Heading';
import Image from 'next/image'; 
import Photo from '../assets/photo.jpg'
import { AiOutlineGift } from "react-icons/ai";
import { FaBook } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Button from '../components/Button';

const About = () => {
    return (
        <div className='container mx-auto py-10 px-8 '>
            <Heading title="About Me" />
            
            {/* Main Grid for About Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'> {/* Reduced gap size */}
                
                {/* Image Section */}
                <div>
                    <Image
                        className='w-[300px]' // Tailwind styles
                        src={Photo} // The imported image
                        alt="About me image"
                        width={300}
                        height={400}
                        style={{ objectFit: "cover" }} // Object-fit cover to maintain aspect ratio
                    />
                </div>
                
                {/* Info Section */}
                <div className='flex items-center justify-between w-[90%]'> 
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-4 items-center font-medium'>
                            <AiOutlineGift />
                            Birthday
                        </div>
                        <div className='flex gap-4 items-center font-medium'>
                            <FaBook />
                            Education
                        </div>
                        <div className='flex gap-4 items-center font-medium'>
                            <AiOutlineGlobal />
                            Website
                        </div>
                        <div className='flex gap-4 items-center font-medium'>
                            <FaLinkedin />
                            LinkedIn
                        </div>
                        <div className='flex gap-4 items-center font-medium'>
                            <FaLocationDot />
                            Location
                        </div>
                    </div>
                    
                    {/* Colon separators */}
                    <div className='flex flex-col gap-6 text-gray-600 m-3'>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                    </div>
                    
                   
                    <div className='flex flex-col gap-6 text-gray-600'>
                        <div>20/11/1999</div>
                        <div>Shivaji University</div>
                        <div>Ashpatil.com</div>
                        <div>linkedin.com/in/your-profile</div> {/* Add actual LinkedIn URL */}
                        <div>Tasgaon</div>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <div className='max-w-[800px] mt-10 md:mt-16'> 
                <h2 className='font-bold'>Asiket Patil a Full Stack Web Developer</h2>
                <p className='text-gray-600 m-4'>
                    Full-Stack Web Developer with a strong foundation in front-end and back-end technologies, seeking to
                    leverage programming skills to create dynamic, user-friendly websites and applications.
                </p>
                <Button text='Hire Me' link='#' /> {/* Ensure the Button component is properly defined */}
            </div>
        </div>
    );
};

export default About;
