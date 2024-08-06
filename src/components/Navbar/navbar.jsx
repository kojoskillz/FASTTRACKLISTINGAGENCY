import React from 'react'
import logo from './logo.png'

const navbar = () => {
  return (
    <div>
      
        <nav className='glass_containerX pb-5 flex jockey-one-regular'>
        <img src={logo} alt="" className='logo absolute -mt-[3rem] -ml-5 w-44 h-44'  />
        <div>
          <h1 className='font-extrabold text-white mt-1 text-5xl fastrack  jockey-one-regular ml-24'>
            <span className=' '>Fast</span>track
          </h1>
        </div>
        <ul className='flex gap-5 text-white m-auto ml-40 flex place-content-center ul_list font-semibold pt-4 '>
            
             <li><a href="#Home" className='cursor-pointer hover:text-red-600'>Home</a></li>
             <li><a href="#About Us" className='cursor-pointer hover:text-red-600'>About Us</a></li>
             <li><a href="#Services" className='cursor-pointer hover:text-red-600'>Services</a></li>
             <li><a href="#Contact Us" className='cursor-pointer hover:text-red-600'>Contact Us</a></li>
            
          </ul>
       {/* join_button */}
          <div className='joinX'>
          <button className='ml-10 join'>
              <a className="btn_text" href="#">Join Now</a>
          </button>
       
          </div>
          
       
        </nav>

        {/* responsive navbar */}


    </div>
  )
}

export default navbar
