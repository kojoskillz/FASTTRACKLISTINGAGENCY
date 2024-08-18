import React from 'react';
import img0 from './images_home/binance.png';
import img1 from './images_home/bitmart.png';
import img2 from './images_home/full-coinw-logo.png';
import img3 from './images_home/kucoin.png';
import img4 from './images_home/lbank.png';
import img5 from './images_home/mexc-xep.png';
import img6 from './images_home/okx-review.png';
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
 


const homepage = () => (
  // mainpage
  <div className=' pb-[10rem] sec0 ' id='Home'>
    <h1 className='font-extrabold text-red-500 text-8xl pt-20 pb-[2rem]  text-wrap text-center grid place-content-center  jockey-one-regular text1'>
      <span className='lawn_color1 lawn_color2 text-9xl' data-aos='fade-in' data-aos-duration='2000'>Welcome! </span>
         <span className='text-white  text-8xl font-semibold lawn_color' data-aos='fade' data-aos-duration='2000'>
                Ready To Elevate Your  Cryptocurrency  project to new heights?
        </span>
    </h1>
    <p className='text-slate-50 font-semibold -mt-4  text-xl text-center text2' data-aos='fade' data-aos-duration='2000'>
      Launch your crypto project to new heights with us! and get listed on top exchanges,<br /> boosting your visibility and credibility.
    </p>

    <div className='m-auto flex gap-7 place-content-center mt-8 ' >
    <button>
       <a className="btn" href="https://t.me/fasttracklistingz">Join Now</a>
    </button>
      
    <div className='bg-transparent rounded-lg b w-32 text-center border-gray-400 glass_containerQ text-white p-2 '>
       <a className="btn font-bold   " href="#">Get Enrolled</a>
    </div>  
    </div>

    
      {/* circle */}
      <div className='flex mt-10 place-content-center boost'>
             <img src={img17} alt="" className='h-14 mt-3 w-14  flex rounded-full place-content-center' />
          <div className='grid'>
             <h3 className='text-white/95 text-lg font-bold text-wrap p-1 textX'> "They are the best listing agency I know of" </h3>
             <h5 className='text-gray-300  text-sm font-light text-wrap ml-4 -mt-4 h5_text '> "Joe Winston,CEO Neptune Inc. " </h5>
         </div>
      
    </div>
    

    {/* horizontal_line */}
    <div className='grid place-content-center mb-16 m-auto rounded-full mt-20'>
        <div className='fade_rule'></div>
    </div>

{/* homepageImage */}
    <img src={img10} alt="" className='w-[20rem] h-[50rem] object-contain grid place-content-center -mt-[6rem] m-auto' data-aos='slide-up' data-aos-duration='2000' />
 
    {/* section0 */}
    <div className='-mt-[5rem] bg-black sec0 '>
      <h1 className='text-wrap text-white text-2xl pt-10 text-center '>
         Partnered with leading companies such as...
      </h1>
      {/* partners_images */}

      <marquee behavior="" direction="" scrolldelay="10" width="90%">
        <div className='flex place-content-center gap-32'>
          <img src={img0} alt="" className='w-[30rem]   h-[30rem] -mt-[8.4rem]  -mr-10 object-contain ' />
          <img src={img1} alt="" className='w-52 h-52 object-contain ' />
          <img src={img2} alt="" className='w-52 h-52 object-contain ' />
          <img src={img3} alt="" className='w-52 h-52 object-contain ' />
          <img src={img4} alt="" className='w-[10rem] h-[10rem] mt-6  object-contain ' />
          <img src={img5} alt="" className='w-[8rem]  h-[8rem]  mt-10 -mr-10  object-contain ' />
          <img src={img6} alt="" className='w-[14rem] h-[14rem] object-contain ' />
          <img src={img7} alt="" className='w-[14rem] h-[14rem] -ml-10  object-contain ' />
        </div>
      </marquee>

      {/* glow */}
      <span className='glow ' data-aos='fade' data-aos-duration='2000'></span>


      {/* our_services */}
      <div className='mb-[10rem] ml-14 -mt-[10rem]' id='Services'>
        <div className='grid p-6'>
          <h1 className='text-white text3 lawn_color service_size font-bold text-7xl float-left text-nowrap  jockey-one-regular ' data-aos='fade' data-aos-duration='2000'>
            Our Services
          </h1>
          <p className='text-xl text-gray-500 text-wrap pt-5 text3_p ' data-aos='fade-up' data-aos-duration='2000'>
              At Fast-Track, we specialize in fast and effective token listings on CoinMarketCap, <br /> CoinGecko, and top centralized exchanges. We offer strategic consulting,<br /> tailored marketing, and ongoing support to ensure your project gets the attention it deserves.
              <br /> With transparent pricing and a seamless process, we make your success our priority. <br />
               Let's take your crypto project to the next level.
          </p>
        </div>

        {/* button */}
        <div className=' p-6 join' data-aos='zoom-in' data-aos-duration='2000'>
          <button className='buttonY'>
            <a className="" href="https://t.me/fasttracklistingz">Join Now</a>
          </button>
          
        </div>

        <div className='absolute float-right ml-[35rem] -mt-[28rem] img16'>
          <img src={img16} alt="" className='w-[50rem] h-[40rem] object-contain img16X' data-aos='fade' data-aos-duration='2000' />
        </div>

        {/* images of tokens */}
        <span className='glow ' data-aos='fade' data-aos-duration='2000'></span>
        <div className='flex mt-12 gap-5 tokens'>

          <div className=' glass_container5 grid place-content-center token1' data-aos='zoom-in' data-aos-duration='3000'>
            <img src={img11} alt="" className='w-16 h-16 img11' />
            <h1 className='text-gray-500  text-lg text-center '>
              Shilling
            </h1>
          </div>
          <div className=' glass_container5 grid place-content-center token2' data-aos='zoom-in' data-aos-duration='2500'>
            <img src={img12} alt="" className='w-16 h-16 img12' />
            <h1 className='text-gray-500  text-lg text-center '>
              Top tier cex
            </h1>
          </div>
          <div className=' glass_container5 grid place-content-center token3 ' data-aos='zoom-in' data-aos-duration='2000'>
            <img src={img13} alt="" className='w-16 h-16 img13' />
            <h1 className='text-gray-500  text-lg text-center  '>
              CMC listing
            </h1>
          </div>
          <div className=' glass_container5 grid place-content-center token4' data-aos='zoom-in' data-aos-duration='1500'>
            <img src={img14} alt="" className='w-16 h-16 img14' />
            <h1 className='text-gray-500  text-lg text-center '>
              Marketing
            </h1>
          </div>
          <div className=' glass_container5 grid place-content-center token5' data-aos='zoom-in' data-aos-duration='1000'>
            <img src={img15} alt="" className='w-16 h-16 img15' />
            <h1 className='text-gray-500 text-nowrap  text-lg text-center '>
              CG Listing
            </h1>
          </div>

        </div>


      </div>


      {/* why_choose_us */}
      <div className='grid jockey-one-regular place-content-center -mt-10 m-auto  mb-2 p-20 '>
        {/* left_float */}
        <h1 className='text-white  lawn_color font-bold text-8xl  chooseX float-left text-nowrap  jockey-one-regular choose' data-aos='fade' data-aos-duration='2000'>
          Why <span className=''>Choose</span><br /> Us?
        </h1>
        
        {/* choose2 */}
        <div className='grid choose2  choose_glass m-auto place-content-center  mt-[5rem] gap-11'>
               <div className='flex gap-5 -ml-5 place-content-center choose3'>
                    <img src={mark} alt="" className='w-12 h-12' />
                    <h1 className='text-gray-400  jockey-one-regular text-md '>
                       <b className='text-white text-lg '>Industry Expertise: </b> 
                      Our team is comprised of seasoned professionals with extensive experience in the cryptocurrency space. 
                      We understand the intricacies of token listings and have a proven track record of successful placements 
                      on CoinMarketCap, CoinGecko, and leading centralized exchanges.
                    </h1>
               </div>
               <div className='flex gap-5 -ml-5 place-content-center choose3'>
                    <img src={mark} alt="" className='w-12 h-12' />
                    <h1 className='text-gray-400  jockey-one-regular text-md '>
                        <b className='text-white text-lg'>  Strategic Partnerships: </b>
                        We’ve built strong relationships with major platforms and exchanges. This enables us to streamline the listing process, 
                        ensuring your token gains visibility on the most influential platforms in the crypto world.
                    </h1>
               </div>
               <div className='flex gap-5 -ml-5 place-content-center choose3'>
                    <img src={mark} alt="" className='w-12 h-12' />
                    <h1 className='text-gray-400  jockey-one-regular text-md '>
                        <b className='text-white text-lg'> Comprehensive Services: </b>
                        We offer a full suite of services that go beyond just listing your token. From strategic advice and compliance guidance to
                         marketing and community building, we support your project at every stage to maximize its potential.
                    </h1>
               </div>
               <div className='flex gap-5 -ml-5 place-content-center choose3'>
               <img src={mark} alt="" className='w-12 h-12' />
                    <h1 className='text-gray-400  jockey-one-regular text-md '>
                    <b className='text-white text-lg'> Fast and Efficient: </b>
                    Time is critical in the fast-paced world of cryptocurrency. Our efficient processes and insider knowledge allow us to expedite the listing process,
                     getting your token to market quickly without sacrificing quality or compliance.

                    </h1>
               </div>
               <div className='flex gap-5 -ml-5 place-content-center choose3'>
               <img src={mark} alt="" className='w-12 h-12' />
                    <h1 className='text-gray-400  jockey-one-regular text-md '>
                       <b className='text-white text-lg '> Transparent Pricing: </b> 
                        We believe in transparency. Our pricing models are straightforward, with no hidden fees. You’ll know exactly what to expect,
                        allowing you to plan and budget effectively.
                    </h1>
               </div>
               <div className='flex gap-5 -ml-5 place-content-center choose3'>
               <img src={mark} alt="" className='w-12 h-12' />
                    <h1 className='text-gray-400  jockey-one-regular text-md '>
                    <b className='text-white text-lg'>Customized Solutions: </b>
                    We recognize that every project is unique. Our team works closely with you to tailor our services to meet your specific needs, ensuring that 
                    your token receives the attention and strategy it deserves.

                    </h1>
               </div>
               <div className='flex gap-5 -ml-5 place-content-center choose3'>
               <img src={mark} alt="" className='w-12 h-12' />
                    <h1 className='text-gray-400  jockey-one-regular text-md '>
                   <b className='text-white text-lg'> Proven Success: </b>
                    Our portfolio speaks for itself. We have successfully listed numerous tokens that have gone on to achieve significant trading volumes and investor interest. 
                    Your success is our priority.

                    </h1>
               </div>
               <div className='flex gap-5 -ml-5 place-content-center choose3'>
               <img src={mark} alt="" className='w-12 h-12' />
                    <h1 className='text-gray-400  jockey-one-regular text-md '>
                       <b className='text-white text-lg'> Ongoing Support: </b> 
                        Listing your token is just the beginning. We provide ongoing support post-listing, helping you navigate any challenges and seize opportunities 
                        as your project grows.
                    </h1>
               </div>
                         
             
        </div>

      </div>


      {/* why_choose_us_ends */}

      <div className='mt-[3rem] '>

        <h1 className='text-white text-wrap text-7xl text-center jockey-one-regular text4' data-aos='fade' data-aos-duration='2000'>
          Members Accomplishment
        </h1>
        <h3 className=' lawn_color1  text-wrap text-lg mt-4 text-center jockey-one-regular text4_p' data-aos='fade-in' data-aos-duration='2000'>
            History is boring! but  numbers aren't
        </h3>

        <div className='flex place-content-center gap-12 grid_rate'>
          <div className='grid text-wrap text-center mt-20'>
            <h1 className='text-8xl jockey-one-regular  text-white rate' data-aos='slide-up' data-aos-duration='1000'>
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
            <h1 className='text-8xl jockey-one-regular  text-white rate' data-aos='slide-up' data-aos-duration='1000'>
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
            <h1 className='text-8xl jockey-one-regular text-white rate' data-aos='slide-up' data-aos-duration='1000'>
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
            <h1 className='text-8xl jockey-one-regular text-white rate' data-aos='slide-up' data-aos-duration='1000'>
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
            <h1 className='text-8xl jockey-one-regular text-white rate' data-aos='slide-up' data-aos-duration='1000'>
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

        {/* watchword */}
        <div className='grid place-content-center m-auto mt-32'>
          <h1 className='text-white  text-center  lawn_color font-bold text-7xl float-left text-nowrap  jockey-one-regular watchword ' data-aos='fade' data-aos-duration='2000'>
            Our Watchword
          </h1>
          <p className='text-2xl text-wrap text-center p-5 text-gray-400  '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />  Earum et adipisci soluta similique velit eius, excepturi, commodi veritatis accusamus corporis facilis 
          </p>
          <div className='flex gap-5 place-content-center percent_grid'>
            <div className=' glass_container6 grid place-content-center mt-12 ' data-aos='zoom-in' data-aos-duration='2500'>
              <h1 className=' jockey-one-regular text-6xl text-white percent_grid_text'>
                100%
              </h1>
              <p className=' lawn_color1 jockey-one-regular text-xl p-2 text-white percent_grid_p'>
                Credibility
              </p>
            </div>

            <div className=' glass_container6 grid place-content-center mt-12' data-aos='zoom-in' data-aos-duration='2000'>
              <h1 className=' jockey-one-regular text-6xl text-white percent_grid_text'>
                100%
              </h1>
              <p className=' lawn_color1 jockey-one-regular text-xl p-2 text-white percent_grid_p'>
                Excellence
              </p>
            </div>

            <div className=' glass_container6 grid place-content-center mt-12 pb-10' data-aos='zoom-in' data-aos-duration='1500'>
              <h1 className='jockey-one-regular text-6xl text-white p-10 percent_grid_text'>
                100%
              </h1>
              <p className=' lawn_color1 jockey-one-regular text-xl p-2 -mt-12 text-white percent_grid_p'>
                Transparency
              </p>
            </div>
          </div>


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



    </div>



          {/* FAQ */}
              {/* FREQUENTLY ASKED QUESTIONS */}
     <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
    </div>


    {/* ends */}
  </div>









)

export default homepage
