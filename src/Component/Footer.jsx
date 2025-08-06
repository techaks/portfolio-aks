import { Mail, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='w-full '>
            <p className='text-gray-400 text-[14px] md:text-xl font-semibold text-center mt-5'>© 2025 AMRENDRA KUMAR SINGH. All rights reserved.</p>
            <div className='flex justify-center items-center text-white '>
                <Mail /> <p className='text-gray-400  md:text-xl font-bold text-center pl-1 ' > aks22cse@gmail.com</p>

            </div>
             <div className='flex justify-center items-center text-white pb-6'>
                <Phone /> <p className='text-gray-400  md:text-xl font-bold text-center pl-1 ' >  8539046447</p>

            </div>
            
        </div>
      
    </div>
  )
}

export default Footer
