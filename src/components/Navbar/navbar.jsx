import React from 'react'

const navbar = () => {
  return (
    <div>
      
        <nav className='glass_containerX pb-5 flex jockey-one-regular'>
        <ul className='flex gap-5 text-white m-auto flex place-content-center font-semibold pt-4 '>
             <li><a href="#Home" className='cursor-pointer hover:text-red-600'>Home</a></li>
             <li><a href="#About Us" className='cursor-pointer hover:text-red-600'>About Us</a></li>
             <li><a href="#Services" className='cursor-pointer hover:text-red-600'>Services</a></li>
             <li><a href="#Contact Us" className='cursor-pointer hover:text-red-600'>Contact Us</a></li>
          </ul>

          {/* <div  className='p-1 mt-2 mr-12 jockey-one-regular'>
               <a className="btn" href="#">Join Now</a>
          </div> */}
        </nav>

    </div>
  )
}

export default navbar
