import React from 'react'
import logo from './Fasttrack logo.png'

const navbar = () => {
  return (
    <div>
      
        <nav className='glass_containerX pb-5 flex jockey-one-regular'>
        <img src={logo} alt="" className='logo absolute -mt-[1.7rem] -ml-5 w-52 h-28'  />
        {/* <div>
          <h1 className=' text-white mt-2 text-4xl fasttrack   ml-24'>
            <span className='font-extrabold '>Fasttrack</span>
          </h1>
        </div> */}
        <ul className='flex gap-5 text-white m-auto jockey-one-regular text-center  place-content-center ul_list font-semibold pt-4 '>
            
             <li><a href="#Home" className='cursor-pointer hover:text-red-600'>Home</a></li>
             <li><a href="#About_Us" className='cursor-pointer hover:text-red-600'>About Us</a></li>
             <li><a href="#Services" className='cursor-pointer hover:text-red-600'>Services</a></li>
             <li><a href="#Contact_Us" className='cursor-pointer hover:text-red-600'>Contact Us</a></li>
            
          </ul>
    
       
        </nav>

      


    </div>
  )
}

export default navbar
