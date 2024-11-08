import React from 'react';
import img0 from './images_home/binance.png';
import img1 from './images_home/bitmart.png';
import img2 from './images_home/coinw.png';
import img3 from './images_home/kucoin.png';
import img4 from './images_home/lbank.png';
import img5 from './images_home/mexc.png';
import img6 from './images_home/okx.png';
import img7 from './images_home/probit.png';
import img11 from './images_home/shilling (3).png';
import img12 from './images_home/seo.png';
import img13 from './images_home/checklist.png';
import img14 from './images_home/digital-marketing.png';
import img15 from './images_home/shilling (2).png';
import img16 from './images_home/img16.png';
import logo from './images_home/Fasttrack logo.png';
import mark from './images_home/checkmark.png';                     
import img18 from './images_home/img18 (2).png';     
import vid from './images_home/video1.mp4';   
import X from './images_home/X.png';
import telegram from './images_home/telegram.png';             
import face1 from './images_home/face1.png';             
import face2 from './images_home/face2.jpg';             
import img19 from './images_home/crypt2.png';             
import img20 from './images_home/img23.png';             
import line from './images_home/line.png';             
import img22 from './images_home/img23.png';             
import img24 from './images_home/img24.jpeg';             
 


const homepage = () => {
   return (
  // mainpage
  <div className=' pb-[10rem] grid m-auto place-content-center main_p ' id='Home' >
 
     <video autoPlay loop muted src={vid} className='object-cover w-full  h-[45rem] video_height gradient' />
    <div className=' grid '>
        <h1 className='ml-10 font-extrabold text-white absolute -mt-[50rem] text-[8rem] pt-32 pb-[2rem]  float-left text-wrap text-left grid place-content-center  jockey-one-regular text1'>
              Fast Track <br />  Listing Agency.                 
        </h1>
      
   
    <div className='m-auto flex gap-7 absolute place-content-left ml-10 mt-[30rem]' >
  
    <a href="https://t.me/fasttracklistingz">
        <button class="ui-btn ui-btnQ m-auto -mt-[45rem] uppercase ">
            <span class="text-white">
              Get In Touch
            </span>
          </button>
        </a>       
    </div>
    
    </div>
    
  
      {/* our_services */}
      <div className='mb-[10rem] mt-[10rem] grid place-content-center m-auto about_Us' id='Services' >
       
        <h1 className='text-white text-2xl text-center about_Us_P'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
           Numquam dolores odio voluptatibus quasi rem quia similique  
        </h1>
        <div className='flex p-6 gap-20 mt-10 m-auto place-content-center  about_Us_P_Grid'>
     
             <div className='w-[30rem] h-[20rem] bg-[#1d20278e] img24'>
               <img src={img24} alt="" className='w-[22rem] h-[15rem] img24X object-cover gradient_bg  bg-center m-auto mt-[2.5rem] ' />

               <div className='who_we_are '>
                   <h1 className='text-4xl absolute p-5 ml-[10rem] -mt-[12rem] border-2 grid place-content-center text-white text-center  '>
                       Who <br /> Are <br /> We
                   </h1>
               </div>
             </div>



          <p className='text-2xl text-white text-wrap pt-5 max-w-[26rem]  text3_p' data-aos='fade-up' data-aos-duration='2000'>
               With transparent pricing and a seamless process, we make your success our priority. 
               Let's take your crypto project to the next level.
          </p>
          <div className='m-auto flex gap-7 absolute place-content-left ml-[18rem] mt-[10rem]' >
 
            <a href="https://t.me/fasttracklistingz"> 
                <button class="bg-transparent btnQ cursor-pointer m-auto mt-10 uppercase ">
                    <h1 class="text-white">
                      Get In Touch
                    </h1>
                  </button>
                </a>       
            </div>
        </div>

        {/* button */}
     
 
        {/* images of tokens */}
        <div className='m-auto grid place-content-center'> 
          <h1 className='text-white underlineMe  text-center  mt-[12rem]   absolute text3 lawn_color service_size font-bold text-4xl text-nowrap  jockey-one-regular ' data-aos='fade' data-aos-duration='2000'>
            Our Services
          </h1>
        <div className='sm:m-auto sm:mt-16  grid grid-cols-4 m-auto place-content-center mt-20  gap-7 tokens '>

<div className='sm:h-[10rem] sm:w-[10rem]  lg:h-[15rem] lg:w-[17rem]   glass_container5 grid place-content-center token1' data-aos='zoom-in' data-aos-duration='3500'>
   <img src={img13} alt="" className='w-28 h-28 img11 sm:h-[5.5rem] sm:w-[5.5rem]  lg:h-[10rem] lg:w-[10rem]  ' />
   <h1 className='text-white  text-nowrap text-2xl token_text mt-3  text-center '>
     CMC listing
   </h1>
 </div>
 <div className='sm:h-[10rem] sm:w-[10.5rem]  lg:h-[15rem] lg:w-[17rem]   glass_container5 grid place-content-center token2' data-aos='zoom-in' data-aos-duration='3500'>
   <img src={img15} alt="" className='w-28 h-28 img12 sm:h-[5.5rem] sm:w-[5.5rem]  lg:h-[10rem] lg:w-[10rem]  ' />
   <h1 className='text-white  text-2xl token_text mt-3 text-center '>
     CG Listing
   </h1>
 </div>
 <div className='sm:h-[10rem] sm:w-[10.5rem]  lg:h-[15rem] lg:w-[17rem]   glass_container5 grid place-content-center token3 ' data-aos='zoom-in' data-aos-duration='3500'>
   <img src={img12} alt="" className='w-28 h-28 img13 sm:h-[5.5rem] sm:w-[5.5rem]  lg:h-[10rem] lg:w-[10rem]  ' />
   <h1 className='text-white  text-2xl token_text mt-3 text-center  '>
   Top Tier Cex
   </h1>
 </div>
 <div className='sm:h-[10rem] sm:w-[10.5rem]  lg:h-[15rem] lg:w-[17rem]   glass_container5 grid place-content-center token4' data-aos='zoom-in' data-aos-duration='3500'>
   <img src={img14} alt="" className='w-28 h-28 img14 sm:h-[5.5rem] sm:w-[5.5rem]  lg:h-[10rem] lg:w-[10rem]  ' />
   <h1 className='text-white  text-2xl token_text mt-3 text-center '>
       Marketing
   </h1>
 </div>
 <div className='sm:h-[10rem] sm:w-[10.5rem]  lg:h-[15rem] lg:w-[17rem]   glass_container5 grid place-content-center token5' data-aos='zoom-in' data-aos-duration='3500'>
   <img src={img11} alt="" className='w-28 h-28 img15 sm:h-[5.5rem] sm:w-[5.5rem]  lg:h-[10rem] lg:w-[10rem]  ' />
   <h1 className='text-white text-nowrap token_text mt-3 text-2xl text-center '>
     Shilling
   </h1>
 </div>
 <div className='sm:h-[10rem] sm:w-[10.5rem]  lg:h-[15rem] lg:w-[17rem]   glass_container5 grid place-content-center token5 token6' data-aos='zoom-in' data-aos-duration='3500'>
   <img src={img18} alt="" className='w-28 h-28 img15 sm:h-[5.5rem] sm:w-[5.5rem]  lg:h-[10rem] lg:w-[10rem]  ' />
   <h1 className='text-white text-nowrap token_text mt-3 text-2xl text-center '>
     Trending
   </h1>
 </div>

</div>

</div>
</div>
       
  {/* horizontal_line */}
  {/* <div className='grid place-content-center mb-16 m-auto rounded-full mt-20 fade_ruleX'>
        <div className='fade_rule '></div>
    </div> */}


      {/* why_choose_us */}
      {/* <div className='grid jockey-one-regular place-content-center -mt-[5rem] m-auto  mb-2 p-20 '> */}
        {/* left_float */}
        {/* <h1 className='text-white  lawn_color font-bold text-8xl mb-10 chooseX float-left text-nowrap  jockey-one-regular choose' data-aos='fade' data-aos-duration='2000'>
          Why <span className=''>Choose</span><br /> Us?
        </h1> */}

{/* main_container */}
        {/* <div className='grid grid-cols-3 gap-y-5 gap-x-20 md:grid container_glassY   place-content-center'>    */}
          {/* container */}
              {/* <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'>Industry Expertise </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                          Our team is comprised of seasoned professionals with extensive experience in the cryptocurrency space. 
                          We understand the intricacies of token listings and have a proven track record of successful placements 
                          on CoinMarketCap, CoinGecko, and leading centralized exchanges.
                      </h1>    
                </div>
                 */}
              {/* <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'>Strategic Partnerships </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                      We’ve built strong relationships with major platforms and exchanges. This enables us to streamline the listing process, 
                      ensuring your token gains visibility on the most influential platforms in the crypto world.
                      </h1>    
                </div> */}
                
              {/* <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'>Comprehensive Services</h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                      We offer a full suite of services that go beyond just listing your token. From strategic advice and compliance guidance to
                      marketing and community building, we support your project at every stage to maximize its potential.
                      </h1>    
                </div>
                 */}
              {/* <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'> Fast and Efficient </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                      Time is critical in the fast-paced world of cryptocurrency. Our efficient processes and insider knowledge allow us to expedite the listing process,
                      getting your token to market quickly without sacrificing quality or compliance.
                      </h1>    
                </div> */}
                
              {/* <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'>Transparent Pricing </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                         We believe in transparency. Our pricing models are straightforward, with no hidden fees. You’ll know exactly what to expect,
                         allowing you to plan and budget effectively.
                      </h1>    
                </div> */}
                
              {/* <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'>Customized Solutions </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                      We recognize that every project is unique. Our team works closely with you to tailor our services to meet your specific needs, ensuring that 
                      your token receives the attention and strategy it deserves.
                      </h1>    
                </div> */}
                
              {/* <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'> Proven Success </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                      Our portfolio speaks for itself. We have successfully listed numerous tokens that have gone on to achieve significant trading volumes and investor interest. 
                      Your success is our priority.
                      </h1>    
                </div> */}
                
              {/* <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'> Ongoing Support </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                      Listing your token is just the beginning. We provide ongoing support post-listing, helping you navigate any challenges and seize opportunities 
                      as your project grows.
                      </h1>    
                </div> */}
                

        {/* </div> */}

      {/* </div> */}


      {/* why_choose_us_ends */}
<div className='m-auto cont0'>
  <h1 className='text-white mb-6 text-center jockey-one-regular text-4xl '>
     What We Offer
  </h1>

  <img src={line} alt="" className='w-[17rem] object-fit'  />
</div>

     <div className="  xl:px-20  sm:grid sm:grid-cols-4 cont1 sm:mb-[-45rem] lg:mb-[10rem] lg:grid grid-cols-1 grid-rows-12 lg:grid-cols-4 lg:grid-rows-6 bg-dark p-8 gap-4">
       <div className="relative cont3  col-span-1 row-span-4  glass_container_bento">
         <h1 className="absolute font-bold top-4 left-4 mr-12 text-md text-white">
            Listing your token is just the beginning. We provide ongoing support post-listing, helping you navigate any challenges and seize opportunities 
            as your project grows.
           </h1> <img className="rounded-2xl absolute bottom-0" src={img19} /> 
           </div> 
                <div className=" cont4 grid-rows-1 grid-cols-4 col-span-2 row-span-1 border glass_container_bento border-white/50 ">
                    <h1 className='text-white p-5 font-semibold text-lg '>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit exercitationem quibusdam 
                    </h1>
                </div>
                   
                    <div className="relative glass_container_bento cont2 col-span-1 row-span-2 ">
                         <h1 className="absolute left-4 flex text-white text-5xl text-wrap top-4">Connect with us</h1> 
                     <div className="absolute pt-12 bottom-4 left-4  flex flex-row items-center ">
                       <img className="glass_container_bento rounded-full " src={X} width={40} height={20} />
                        <img className="glass_container_bento rounded-full" src={telegram} width={40} height={20} /> 
                        </div> 
                        </div> 
                        <div className="relative cont8 bg-gradient-to-t from-green-100 via-yellow-100 glass_container_bento to-pink-100 col-span-2 row-span-3 "> 
                          <span className="absolute text-xs font-semibold text-white left-4 top-4"> Fasttracklisting</span> 
                          <h1 className="absolute mt-3 items-center justify-center left-4 top-12 text-6xl text-white font-thin">
                                  Get <br /> Connected With <br /> Our Top Experts. </h1> <span className="absolute bottom-4 left-4 text-xs text-white "> We provide the best services <br /> in the  crypto industry <br />{" "}  </span> 
                               </div> 
                             <div className="relative cont5 col-span-1 row-span-4  glass_container_bento"> 
                              <p className="absolute text-xl font-medium left-4 top-4 text-white ">
                                 Learn more <br /> about how Fasttrack, <br /> works and how it can <br /> help you. book a call with us.
                              </p>
                              <button className="px-1 right-4 top-[10rem] h-10 absolute text-xs py-1 border-blue-500  border rounded-xl cursor-pointer  text-white glass_container_bento  hover:bg-gray-400/10 hover:text-light duration-500"> {" "} BOOK A CALL{" "} </button>
                              <img src={img20} className="absolute bottom-4" />
                               </div> 
                              <div className="relative cont6 col-span-1 row-span-2 glass_container_bento "> 
                                <button className="absolute text-xs left-2 top-2 px-2 py-1 bg-white text-white glass_container_bento h-8 hover:bg-gray-400/10 hover:text-light duration-500" >GET STARTED</button> 
                              <h1 className="absolute right-4 top-6 text-4xl" ></h1>
                               </div>
                                <div className="relative cont7 items-center justify-center col-span-2 row-span-2 h-[15rem] glass_container_bento">
                                <h1 className='font-bold text-4xl text-white p-2  '>
                                  Why Choose Us:
                                </h1>
                                <ul className='font-semibold text-white p-2 text-sm '>
                                  <li> We have successfully listed numerous tokens that have gone on <br /> to achieve significant trading volumes and investor interest</li>
                                </ul>
                                <ul className='font-semibold text-white p-2 text-sm '>
                                  <li>  Our team works closely with you to tailor our services  <br /> to meet your specific needs </li>
                                </ul>
                                <ul className='font-semibold text-white p-2 text-sm '>
                                  <li>  We believe in transparency. Our pricing models are straight forward,  <br /> with no hidden fees </li>
                                </ul>
                              
                                 </div>
                         </div>


      {/* <div className='mt-[3rem] '> */}

        {/* <div className='grid place-content-center m-auto mt-8'> */}
        
          {/* <div className='glass_container7 grid place-content-center m-auto mt-16 '>

            <div data-aos='fade' data-aos-duration='2000'>
              <h1 className='jockey-one-regular text-6xl pt-10 text-white text5'>
                Our <span className='text-red-400  lawn_color1 text5'><i>vision</i> </span> is  to become a leading force in promoting and facilitating the adoption of cryptocurrencies
                through effective listing strategies. We provide trust and security in the crypto industry.
              </h1>
              <div className='flex p-5 mt-5 '>
                <img src={logo} alt="" className='rounded-full w-52 h-32 logo1' />   
              </div>
            </div>
            
          </div> */}

          {/* ends */}
        {/* </div> */}
      {/* </div> */}

     {/* our team */}
     <div className='mt-20 bg-[#1d20278e] team_Top lg:grid sm:grid xs:place-content-center '>
               <h1 className='text-white mt-10  lg:grid sm:grid sm:place-content-center underlineMe_Mv1 underlineMe_Mv2 underlineMe   text-wrap text-5xl text-center jockey-one-regular text4' data-aos='fade' data-aos-duration='2000'>
                  Our Team
               </h1>
         <div className='flex place-content-center mt-14 gap-8'>
             

{/* team members */}

     <div className='w-full -mt-16 flex m-auto place-content-center  teamCard gap-5 p-20 sm:flex '>
     <div class="card">
        <div class="card-info">
        <div class=""><img src={face1} alt="" className='rounded-full w-28  h-28 mb-2 object-fill ' /></div>
        <div class="card-title">Josephine Ezekiel</div>
        <div class="card-subtitle"> Founder</div>
        </div>
        <ul class="card-social">
        <li class="card-social__item">
      </li>
      {/* x app */}
      <li class="card-social__item">
        <a href="https://x.com/Joseyglitterin2"> 
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
            </svg>
        </a>
    </li>
    {/* linkedin */}
    <li class="card-social__item">
      <a href="https://www.linkedin.com/in/jose-kel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
          </svg>
      </a>
    </li>
  </ul>
</div>

        {/* <div class="card">
        <div class="card-info">
        <div class=""><img src={face2} alt="" className='rounded-full w-28  h-28 mb-2 object-fill ' /></div>
        <div class="card-title">Promise Wilfred</div>
        <div class="card-subtitle"> Co-Founder</div>
        </div>
        <ul class="card-social">
        <li class="card-social__item">
      </li> */}
      
 {/* x app */}
      {/* <li class="card-social__item">
        <a href="https://x.com/Promise_wils?t=ebL4l1Kgn8pcebZcDoklmw&s=09">
           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
           </svg>
        </a>
    </li> */}
   {/* linkedin */}
    {/* <li class="card-social__item">
      <a href="https://www.linkedin.com/in/promise-wilfred-7a6628208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
            </svg>
      </a>
    </li>
  </ul>
</div> */}
{/* ends */}
         </div>
     </div>


     </div>
      


      {/* FAQ */}
    {/* FREQUENTLY ASKED QUESTIONS */}
      <div className='mb-[10rem] m-auto mt-44'>
      
        <div className='jockey-one-regular text-5xl lawn_color mb-32 FAQ_h1 text-center -mt-20'>
            Frequently Asked Questions
        </div>

     <div className='w-[50rem] m-auto FAQ -mt-20'>
                    {/* <div className="collapse collapse-arrow rounded-lg bg-gray-500/5 bg-base-200 mb-5">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                      <div className="collapse-title text-xl font-medium">What services does your agency provide?
                      </div>
                       <div className="collapse-content">
                        <p>We offer a range of services including token listings on CoinMarketCap and CoinGecko, marketing, shilling, trending, community management, and growth strategies.
                        </p>
                      </div>
                    </div>
                  */}
                    {/* <div className="collapse collapse-arrow rounded-lg bg-gray-500/5 bg-base-200 mb-5">
                       <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How long does the token listing process take?
                    </div>
                    <div className="collapse-content">
                        <p>We expedite listings by up to 80%.. within 24 - 72hrs.  The exact timeframe depends on the platform and specific requirements of your token.
                        </p>
                    </div>
                    </div> */}
                    {/* <div className="collapse collapse-arrow  rounded-lg bg-gray-500/5 bg-base-200 mb-5">
                       <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Do you list tokens with low volume?
                    </div>
                    <div className="collapse-content">
                        <p>
                        Yes, we do list tokens with low volume. Our focus is on helping projects of all sizes gain visibility and traction. We work with you to develop strategies that can enhance your token’s market presence and drive growth.
                        </p>
                    </div>
                    </div> */}
                    {/* <div className="collapse collapse-arrow rounded-lg bg-gray-500/5 bg-base-200 mb-5">
                      <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What are your pricing structures?
                    </div>
                    <div className="collapse-content">
                        <p>
                        Our pricing is transparent and varies based on the services you choose. We offer detailed quotes tailored to your project’s needs, with no hidden fees.
                        </p>
                    </div>
                    </div> */}
                    <div className="collapse collapse-arrow  rounded-lg bg-gray-500/5 bg-base-200 mb-5">
                      <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    How do you support community growth?
                    </div>
                    <div className="collapse-content">
                        <p>
                             We employ targeted marketing campaigns, community engagement strategies, and shilling efforts to build and grow your token’s community effectively
                        </p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow rounded-lg bg-gray-500/5 bg-base-200 mb-5">
                       <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                          Do you charge advance payment?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Yes, we typically require advance payment to begin work on our services. This ensures that we can allocate the necessary resources and prioritize your project. The exact terms and payment structure will be detailed in our initial agreement.
                        </p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow rounded-lg bg-gray-500/5 bg-base-200  mb-5">
                       <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do I get started with your services?
                    </div>
                    <div className="collapse-content">
                        <p>
                           Simply reach out to us through our telegram or contact form . We’ll discuss your project’s needs and create a tailored plan to achieve your goals.
                        </p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow  rounded-lg bg-gray-500/5 bg-base-200 mb-5">
                       <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Do you offer post-listing support?
                    </div>
                    <div className="collapse-content">
                        <p>
                        Yes, we provide ongoing support after the listing to help you navigate challenges and capitalize on growth opportunities.
                        </p>
                    </div>
                </div>
                

        </div>


{/* ends */}
    </div>

<div className='mb-44 -mt-24  '>


    <h1 className='text-white  underlineMe_Mv underlineMe  text-wrap text-4xl text-center jockey-one-regular text4' data-aos='fade' data-aos-duration='2000'>
          Members Accomplishment
        </h1>
        <h3 className=' lawn_color1  text-wrap text-lg mt-6 text-center jockey-one-regular text4_p' data-aos='fade-in' data-aos-duration='2000'>
            History is boring! but  numbers aren't
        </h3>

        <div className='flex place-content-center gap-12 grid_rate'>
          <div className='grid text-wrap text-center mt-20'>
            <h1 className='text-6xl jockey-one-regular  text-white rate' data-aos='slide-up' data-aos-duration='1000'>
              100+
            </h1>
            <h3 className=' lawn_color1 text-lg rate_p' data-aos='slide-up' data-aos-duration='2000'>
            Successful Token Listings
            </h3>
            <p className=' text-gray-200 text-lg' data-aos='slide-up' data-aos-duration='2000'>
               Over 100 tokens listed on CoinMarketCap, CoinGecko, and leading
              centralized exchanges.
            </p>
          </div>
          <div className='grid text-wrap text-center mt-20 rate_up jockey-one-regular'>
            <h1 className='text-6xl jockey-one-regular  text-white rate' data-aos='slide-up' data-aos-duration='1000'>
              95%
            </h1>
            <h3 className=' lawn_color1 text-lg  rate_p' data-aos='slide-up' data-aos-duration='2000'>
               Client Satisfaction
            </h3>
            <p className=' text-gray-200 text-lg' data-aos='slide-up' data-aos-duration='2000'>
                Consistently delivering high-quality service with a 95% client satisfaction.
            </p>
          </div>

          <div className='grid text-wrap text-center mt-20 rate_up rate_p_up jockey-one-regular'>
            <h1 className='text-6xl jockey-one-regular text-white rate' data-aos='slide-up' data-aos-duration='1000'>
              50+
            </h1>
            <h3 className=' lawn_color1 text-lg  rate_p' data-aos='slide-up' data-aos-duration='2000'>
               Marketing Campaigns Executed
            </h3>
            <p className=' text-gray-200 text-lg' data-aos='slide-up' data-aos-duration='2000'>
              Launched and managed over 50 successful marketing campaigns,driving significant engagement and growth.
            </p>
          </div>
          <div className='grid text-wrap text-center mt-20 rate_up rate_p_up jockey-one-regular'>
            <h1 className='text-6xl jockey-one-regular text-white rate' data-aos='slide-up' data-aos-duration='1000'>
              10x
            </h1>
            <h3 className=' lawn_color1 text-lg  rate_p' data-aos='slide-up' data-aos-duration='2000'>
               Community Growth
            </h3>
            <p className=' text-gray-200 text-lg' data-aos='slide-up' data-aos-duration='2000'>
               Helped clients grow their communities by up to 10 times within six months.
            </p>
          </div>
          <div className='grid text-wrap text-center mt-20 rate_up rate_p_up jockey-one-regular'>
            <h1 className='text-6xl jockey-one-regular text-white rate' data-aos='slide-up' data-aos-duration='1000'>
              80%
            </h1>
            <h3 className=' lawn_color1 text-lg  rate_p' data-aos='slide-up' data-aos-duration='2000'>
               Faster Listings
            </h3>
            <p className=' text-gray-200 text-lg' data-aos='slide-up' data-aos-duration='2000'>
               Achieved listings up to 80% faster than industry averages, ensuring your tokens gets to market quickly.
            </p>
          </div>

        </div>

        </div>


{/* partners */}
<div className='grid place-content-center partners1 -mb-[40rem]  m-auto'>
       <h1 className='text-4xl   text-center partner_text jockey-one-regular text-white'>
           Partnered with leading companies such as... 
       </h1>

{/* images_container */}
       <div className='m-auto grid place-content-center partners mt-16 gap-8 grid-cols-4'>
           <div className='bg-white h-[5rem] w-[10rem] img0_box rounded-2xl' >
              <img src={img0} alt="" className='mt-[-2.5rem] img0' />
          </div>
          <div className='bg-white h-[5rem] w-[10rem] img0_box rounded-2xl' >
              <img src={img1} alt="" className='-mt-[1.5rem] img_up6'/>
          </div>
          <div className='bg-white h-[5rem] w-[10rem] img0_box rounded-2xl' >
              <img src={img2} alt="" className='-mt-[1.5rem] img_up5'/>
          </div>
          <div className='bg-white h-[5rem] w-[10rem] img0_box rounded-2xl' >
              <img src={img3} alt="" className='-mt-[1.3rem]  img_up'/>
          </div>
          <div className='bg-white h-[5rem] w-[10rem] img0_box rounded-2xl' >
              <img src={img4} alt="" className='-mt-[2.4rem] img_up1'/>
          </div>
          <div className='bg-white h-[5rem] w-[10rem] img0_box rounded-2xl' >
              <img src={img5} alt="" className='mt-[.8rem] img_up2'/>
          </div>
          <div className='bg-white h-[5rem] w-[10rem] img0_box rounded-2xl' >
              <img src={img6} alt="" className='-mt-[2.2rem] img_up3'/>
          </div>
          <div className='bg-white h-[5rem] w-[10rem] img0_box rounded-2xl' >
              <img src={img7} alt="" className='mt-[.2rem] img_up4'/>
          </div>
            
       </div>

</div>

</div>

)
};

export default homepage
