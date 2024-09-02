import React from 'react';
import X from './X.png';
import telegram from './telegram.png';


const footer = () => {
  return (
    <div className='bg-black pb-[2rem] mt-[40rem]  footer' id='Contact_Us'>
      <div className=' p-12 text-xl'>

         <div className='flex'>
            <h1 className='text-white text-2xl '>
               Join Our Trading Alpha  <br /> Community
            </h1>
                <div className='flex gap-10 mt-10 pb-56 footer_links'>
                    {/* <span className='h-8 w-1 bg-red-600 absolute '></span> */}
                        
                    <div className='ml-[50rem]'>
                        <h1 className='text-white font-bold text-xl ml-2 jockey-one-regular'>
                            ABOUT US
                        </h1>
                        
                        <p className='ml-2 text-white mt-4 cursor-pointer' id='Home'>
                             Home
                        </p>
                        <p className='ml-2 text-white mt-3 cursor-pointer ' id='Services'>
                             Services
                        </p>
                     </div>
                       
                        <div>
                        <h1 className='text-white font-bold text-xl ml-5 jockey-one-regular'>
                            OUR SOCIALS
                        </h1>
                        <div className='grid text-white w-16 mt-4 ml-5 gap-3'>
                               <a href="https://x.com/FastTrackAgency"><h1>Twitter</h1></a>
                               <a href="https://t.me/fasttracklistingz"><h1>Telegram</h1></a>
                        </div>    
                        </div>
                        
                    
                </div>

            </div>
 

            <div className='mb-10 footer_text'>
               {/* <marquee behavior="" direction="left" className="text-white h-[100vh] -mt-[20rem] font-medium text-[40rem] absolute z-10 ">
                       <h1>
                            Let's Talk 
                        </h1>
                </marquee> */}
                    <h1 className='text-[7rem]  mt-10 ml-[45rem] text-wrap footer_text1  text-white hover_text'>
                      Let's Talk    
                    </h1>                        
            </div>

</div>        

 
      </div>

  

  )
}

export default footer
