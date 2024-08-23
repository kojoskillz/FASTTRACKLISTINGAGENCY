import React from 'react';
import img0 from './images_home/binance.png';
import img1 from './images_home/bitmart.png';
import img2 from './images_home/coinw.png';
import img3 from './images_home/kucoin.png';
import img4 from './images_home/lbank.png';
import img5 from './images_home/mexc.png';
import img6 from './images_home/okx.png';
import img7 from './images_home/probit.png';
import img10 from './images_home/logoX.png';
import img11 from './images_home/shilling (3).png';
import img12 from './images_home/seo.png';
import img13 from './images_home/checklist.png';
import img14 from './images_home/digital-marketing.png';
import img15 from './images_home/shilling (2).png';
import img16 from './images_home/img16.png';
import img17 from './images_home/face2.jpg';
import logo from './images_home/Fasttrack logo.png';
import mark from './images_home/checkmark.png';                     
import img18 from './images_home/img18 (2).png';     
import vid from './images_home/video1.mp4';   
import X from './images_home/X.png';
import telegram from './images_home/telegram.png';             
 


const homepage = () => {
   return (
  // mainpage
  <div className=' pb-[10rem] grid m-auto place-content-center main_p ' id='Home' >
 
     <video autoPlay loop muted src= {vid} className='object-cover w-full  h-[45rem] gradient' />
    <div className=' grid '>
    <h1 className='ml-10 font-extrabold text-white absolute -mt-[50rem] text-[8rem] pt-32 pb-[2rem]  float-left text-wrap text-left grid place-content-center  jockey-one-regular text1'>
          Fast Track <br />  Listing Agency.                 
    </h1>
  
    <div className='flex w-20 -mt-[18rem] ml-12 cursor-pointer socials gap-3'>
            <a href="https://x.com/FastTrackAgency"><img src={X} alt="" /></a>
            <a href="https://t.me/fasttracklistingz"><img src={telegram} alt=""/></a>
    </div>        

    <div className='m-auto flex gap-7 absolute place-content-left ml-10 mt-[30rem]' >
    {/* <button>
       <a className="btnY" href="https://t.me/fasttracklistingz">Get In Touch</a>
    </button> */}
    <a href="https://t.me/fasttracklistingz"> <button class="ui-btn m-auto -mt-[45rem] uppercase ">
            <span class="text-white">
              Get In Touch
            </span>
          </button>
        </a>       
    </div>
    
    </div>
    
  


      {/* our_services */}
      <div className='mb-[10rem] ml-14 mt-[10rem] m-auto' id='Services' >
        <div className='grid p-6'>
          <h1 className='text-white underlineMe text3 lawn_color service_size font-bold text-7xl float-left text-nowrap  jockey-one-regular ' data-aos='fade' data-aos-duration='2000'>
            Our Services
          </h1>
          <p className='text-xl text-white text-wrap pt-5 text3_p' data-aos='fade-up' data-aos-duration='2000'>
              At Fast-Track, we specialize in fast and effective token listings on CoinMarketCap, <br /> CoinGecko, and top centralized exchanges. We offer strategic consulting,<br /> tailored marketing, and ongoing support to ensure your project gets the attention it deserves.
              <br /> With transparent pricing and a seamless process, we make your success our priority. <br />
               Let's take your crypto project to the next level.
          </p>
        </div>

        {/* button */}
     
 <div className='m-auto flex gap-7 ui-btn2 absolute place-content-left ml-7 -mt-[2rem]' >
 
    <a href="https://t.me/fasttracklistingz"> 
        <button class="ui-btn   m-auto mt-10 uppercase ">
            <span class="text-white">
              Get In Touch
            </span>
          </button>
        </a>       
    </div>

        <div className='absolute float-right ml-[42rem] -mt-[28rem] img16'>
          <img src={img16} alt="" className='w-[50rem] h-[40rem] object-contain img16X myimg' data-aos='fade' data-aos-duration='2000' />
        </div>

        {/* images of tokens */}
        <div className='m-auto grid place-content-center'> 
          <div className='grid grid-cols-4  m-auto place-content-center mt-56 gap-7 tokens '>

<div className=' glass_container5 grid place-content-center token1' data-aos='zoom-in' data-aos-duration='3500'>
   <img src={img13} alt="" className='w-32 h-32 img11' />
   <h1 className='text-white  text-nowrap text-3xl mt-3  text-center '>
     CMC listing
   </h1>
 </div>
 <div className=' glass_container5 grid place-content-center token2' data-aos='zoom-in' data-aos-duration='3500'>
   <img src={img15} alt="" className='w-32 h-32 img12' />
   <h1 className='text-white  text-3xl mt-3 text-center '>
     CG Listing
   </h1>
 </div>
 <div className=' glass_container5 grid place-content-center token3 ' data-aos='zoom-in' data-aos-duration='3500'>
   <img src={img12} alt="" className='w-32 h-32 img13' />
   <h1 className='text-white  text-3xl mt-3 text-center  '>
   Top Tier Cex
   </h1>
 </div>
 <div className=' glass_container5 grid place-content-center token4' data-aos='zoom-in' data-aos-duration='3500'>
   <img src={img14} alt="" className='w-32 h-32 img14' />
   <h1 className='text-white  text-3xl mt-3 text-center '>
       Marketing
   </h1>
 </div>
 <div className=' glass_container5 grid place-content-center token5' data-aos='zoom-in' data-aos-duration='3500'>
   <img src={img11} alt="" className='w-32 h-32 img15' />
   <h1 className='text-white text-nowrap mt-3 text-3xl text-center '>
     Shilling
   </h1>
 </div>
 <div className=' glass_container5 grid place-content-center token5 token6' data-aos='zoom-in' data-aos-duration='3500'>
   <img src={img18} alt="" className='w-32 h-32 img15' />
   <h1 className='text-white text-nowrap mt-3  text-3xl text-center '>
     Trending
   </h1>
 </div>

</div>



</div></div>
       
  {/* horizontal_line */}
  <div className='grid place-content-center mb-16 m-auto rounded-full mt-20'>
        <div className='fade_rule'></div>
    </div>


      {/* why_choose_us */}
      <div className='grid jockey-one-regular place-content-center -mt-[5rem] m-auto  mb-2 p-20 '>
        {/* left_float */}
        <h1 className='text-white  lawn_color font-bold text-8xl mb-10 chooseX float-left text-nowrap  jockey-one-regular choose' data-aos='fade' data-aos-duration='2000'>
          Why <span className=''>Choose</span><br /> Us?
        </h1>

{/* main_container */}
        <div className='grid grid-cols-3 gap-y-5 gap-x-20 md:grid container_glassY  place-content-center'>   
          {/* container */}
              <div className='grid container_glassA'>
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
                
              <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'>Strategic Partnerships </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                      We’ve built strong relationships with major platforms and exchanges. This enables us to streamline the listing process, 
                      ensuring your token gains visibility on the most influential platforms in the crypto world.
                      </h1>    
                </div>
                
              <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'>Comprehensive Services</h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                      We offer a full suite of services that go beyond just listing your token. From strategic advice and compliance guidance to
                      marketing and community building, we support your project at every stage to maximize its potential.
                      </h1>    
                </div>
                
              <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'> Fast and Efficient </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                      Time is critical in the fast-paced world of cryptocurrency. Our efficient processes and insider knowledge allow us to expedite the listing process,
                      getting your token to market quickly without sacrificing quality or compliance.
                      </h1>    
                </div>
                
              <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'>Transparent Pricing </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                         We believe in transparency. Our pricing models are straightforward, with no hidden fees. You’ll know exactly what to expect,
                         allowing you to plan and budget effectively.
                      </h1>    
                </div>
                
              <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'>Customized Solutions </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                      We recognize that every project is unique. Our team works closely with you to tailor our services to meet your specific needs, ensuring that 
                      your token receives the attention and strategy it deserves.
                      </h1>    
                </div>
                
              <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'> Proven Success </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                      Our portfolio speaks for itself. We have successfully listed numerous tokens that have gone on to achieve significant trading volumes and investor interest. 
                      Your success is our priority.
                      </h1>    
                </div>
                
              <div className='grid container_glassA'>
                 <div className='flex flex-auto '>
                      <img src={mark} alt="" className='w-12 h-12' />
                      <h1 className='text-white text-lg mt-2 font-semibold'> Ongoing Support </h1> 
                 </div>
                      <h1 className='font-extralight jockey-one-regular text-sm container_glass_h1'>
                      Listing your token is just the beginning. We provide ongoing support post-listing, helping you navigate any challenges and seize opportunities 
                      as your project grows.
                      </h1>    
                </div>
                

        </div>

      </div>


      {/* why_choose_us_ends */}

      <div className='mt-[3rem] '>

        <h1 className='text-white  underlineMe_Mv underlineMe  text-wrap text-5xl text-center jockey-one-regular text4' data-aos='fade' data-aos-duration='2000'>
          Members Accomplishment
        </h1>
        <h3 className=' lawn_color1  text-wrap text-lg mt-4 text-center jockey-one-regular text4_p' data-aos='fade-in' data-aos-duration='2000'>
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

        <div className='grid place-content-center m-auto mt-8'>
        
          <div className='glass_container7 grid place-content-center m-auto mt-16 '>

            <div data-aos='fade' data-aos-duration='2000'>
              <h1 className='jockey-one-regular text-6xl pt-10 text-white text5'>
                Our <span className='text-red-400  lawn_color1 text5'><i>vision</i> </span> is  to become a leading force in promoting and facilitating the adoption of cryptocurrencies
                through effective listing strategies. We provide trust and security in the crypto industry.
              </h1>
              <div className='flex p-5 mt-5 '>
                <img src={logo} alt="" className='rounded-full w-52 h-32 logo1' />   
              </div>
            </div>
            
          </div>

          {/* ends */}
        </div>
      </div>



      {/* FAQ */}
    {/* FREQUENTLY ASKED QUESTIONS */}
      <div className='mb-[10rem] m-auto mt-44'>
      
        <div className='jockey-one-regular text-5xl lawn_color mb-32 FAQ_h1 text-center -mt-20'>
            Frequently Asked Questions
        </div>

     <div className='w-[50rem] m-auto FAQ -mt-20'>
                    <div className="collapse collapse-arrow rounded-lg bg-gray-500/5 bg-base-200 mb-5">
                      <input type="radio" name="my-accordion-2" defaultChecked />
                      <div className="collapse-title text-xl font-medium">What services does your agency provide?
                      </div>
                       <div className="collapse-content">
                        <p>We offer a range of services including token listings on CoinMarketCap and CoinGecko, marketing, shilling, trending, community management, and growth strategies.
                        </p>
                      </div>
                    </div>
                 
                    <div className="collapse collapse-arrow rounded-lg bg-gray-500/5 bg-base-200 mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How long does the token listing process take?
                    </div>
                    <div className="collapse-content">
                        <p>We expedite listings by up to 80%.. within 24 - 72hrs.  The exact timeframe depends on the platform and specific requirements of your token.
                        </p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow  rounded-lg bg-gray-500/5 bg-base-200 mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Do you list tokens with low volume?
                    </div>
                    <div className="collapse-content">
                        <p>
                        Yes, we do list tokens with low volume. Our focus is on helping projects of all sizes gain visibility and traction. We work with you to develop strategies that can enhance your token’s market presence and drive growth.
                        </p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow rounded-lg bg-gray-500/5 bg-base-200 mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What are your pricing structures?
                    </div>
                    <div className="collapse-content">
                        <p>
                        Our pricing is transparent and varies based on the services you choose. We offer detailed quotes tailored to your project’s needs, with no hidden fees.
                        </p>
                    </div>
                    </div>
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
}

export default homepage
