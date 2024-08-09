import React from 'react'

const footer = () => {
  return (
    <div className='bg-black pb-[2rem] rounded-t-3xl border-red-600/20 border-y-2 footer' id='Contact_Us'>
      <div className=' p-12 text-xl'>
            <h1 className='font-extrabold text-white text-4xl jockey-one-regular footer_text'>
                    <span className='lawn_color1 text-4xl footer_text'>FastTrack</span>ListingAgency
            </h1>
            <p className='text-white '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quis 
            </p>


            <div>
                <div className='flex mt-10'>
                    <span className='h-8 w-1 bg-red-600 absolute '></span>
                        <h1 className='text-white font-bold text-xl ml-5 jockey-one-regular'>
                            CONTACT US
                        </h1>
                </div>

                <div className='mt-8 text7'>
                        {/* <p className='text-white jockey-one-regular'>
                            St 121, Lagos-Nigeria
                        </p>
                        <p className='text-white jockey-one-regular'>
                        Call Us:<b>+234 8888888</b> 
                        </p> */}
                        <p className='text-white jockey-one-regular'>
                            FastTracklistingagency121@gmail.com
                        </p>
                </div>
             
            </div>

{/* horizontal_line */}
            <div className='grid place-content-center m-auto rounded-full mt-10'>
              <div className='fade_rule'></div>
            </div>
            
 
      </div>

  
{/* Quicklinks */}
      <div className='text-white font-light text-base m-auto place-content-center flex'>
           <ul className='flex gap-5 jockey-one-regular  text8'>
              <li><a href="#Home" className='cursor-pointer hover:text-red-600'>Home</a></li>
              <li><a href="#About Us" className='cursor-pointer hover:text-red-600'>About Us</a></li>
              <li><a href="#Services" className='cursor-pointer hover:text-red-600'>Services</a></li>
              <li><a href="#Contact Us" className='cursor-pointer hover:text-red-600'>Contact Us</a></li>
           </ul>
      </div>
      
         <h1 className="text-gray-400 text-wrap text-center text-sm mt-5 copy jockey-one-regular">
            Copyright &copy; 2024 Fastracklistingagency. All rights reserved.
         </h1>
    </div>
  )
}

export default footer
