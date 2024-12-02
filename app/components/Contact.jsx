import React from 'react'
import Heading from './Heading'

const Contact = () => {
  return (
    <div className='container mx-auto py-10 px-4'>
        <Heading title='Contact us'/>

        <form action="" className='flex flex-col gap-8'>
            <div className='grid  grid-cols-1 md:grid-cols-2 gap-8'>
                <input type="text" placeholder='Name' className='inputStyle' required />
                <input type="Email" placeholder='Email' className='inputStyle' required />
            </div>
            <input type="Email" placeholder='Subject' className='inputStyle' required />
            <textarea rows={6} placeholder='message'required></textarea>
            <div>
                <button type='submit' className='btn'>Send Message</button>
            </div>
        </form>
      
    </div>
  )
}

export default Contact
