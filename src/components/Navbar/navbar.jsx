import React from 'react'
import logo from './logo.png'

const navbar = () => {
  return (
    <div>
      
        <nav className='glass_containerX pb-5 flex jockey-one-regular'>
        <img src={logo} alt="" className='logo absolute -mt-[3rem] w-44 h-44'  />
        <ul className='flex gap-5 text-white m-auto flex place-content-center ul_list font-semibold pt-4 '>
            
             <li><a href="#Home" className='cursor-pointer hover:text-red-600'>Home</a></li>
             <li><a href="#About Us" className='cursor-pointer hover:text-red-600'>About Us</a></li>
             <li><a href="#Services" className='cursor-pointer hover:text-red-600'>Services</a></li>
             <li><a href="#Contact Us" className='cursor-pointer hover:text-red-600'>Contact Us</a></li>
          </ul>

       
        </nav>

        {/* responsive navbar */}


    </div>
  )
}

export default navbar
