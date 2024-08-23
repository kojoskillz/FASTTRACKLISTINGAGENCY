import React from 'react';
import X from './X.png';
import telegram from './telegram.png';


const footer = () => {
  return (
    <div className='bg-black pb-[2rem] mt-[40rem] rounded-t-3xl border-red-600/20 border-y-2 footer' id='Contact_Us'>
      <div className=' p-12 text-xl'>
            <h1 className='font-extrabold text-white text-4xl jockey-one-regular footer_text'>
                    <span className='lawn_color1 text-4xl footer_text'>FastTrack</span>ListingAgency
            </h1>
            <p className='text-white text-lg   0 .112 '>
                We provide the best services by listing you on our platform and connecting you with a global network of investors.
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
                           Email:FastTracklistingagency6@gmail.com
                        </p>
                </div>

                {/* socials */}
                <div className='grid mt-10'>
                    <span className='h-8 w-1 bg-red-600 absolute '></span>
                        <h1 className='text-white font-bold text-xl ml-5 jockey-one-regular'>
                            OUR SOCIALS
                        </h1>
                        <div className='flex w-16 mt-4 gap-3'>
                               <a href="https://x.com/FastTrackAgency"><img src={X} alt="" /></a>
                               <a href="https://t.me/fasttracklistingz"><img src={telegram} alt=""/></a>
                        </div>
                        
                </div>
             
            </div>

{/* horizontal_line */}
            <div className='grid place-content-center m-auto rounded-full mt-10'>
              <div className='fade_rule m-auto place-content-center grid'></div>
            </div>
    {/* Quicklinks */}
 <div className='grid  place-content-center m-auto'>
       <div className='text-white font-light text-base m-auto place-content-center flex'>
           <ul className='flex gap-5 jockey-one-regular  text8'>
              <li><a href="#Home" className='cursor-pointer hover:text-red-600'>Home</a></li>
              <li><a href="#Services" className='cursor-pointer hover:text-red-600'>Services</a></li>
              <li><a href="#Contact Us" className='cursor-pointer hover:text-red-600'>Contact Us</a></li>
           </ul>
      </div>
      
         <h1 className="text-gray-400 text-wrap text-center text-sm mt-5 copy jockey-one-regular">
            Copyright &copy; 2024 Fastracklistingagency. All rights reserved.
         </h1>

         
    </div>
  
</div>        
 
      </div>

  

  )
}

export default footer
