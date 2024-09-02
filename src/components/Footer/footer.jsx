@tailwind base;
@tailwind components;
@tailwind utilities;


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    
}


body{
    background-color: #080909d3;

}


.jockey-one-regular {
    font-family: "Jockey One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  button {
    border-radius: .25rem;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 400;
    padding-left: 25px;
    padding-right: 25px;
    color: #fff;
    -webkit-clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);
    clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);
    height: 90px;
    font-size: 0.7rem;
    line-height: 14px;
    letter-spacing: 1.2px;
    transition: .2s .1s;
    background:linear-gradient(to right,rgb(255, 97, 97),rgb(255, 43, 64));
    border: 0 solid;
    overflow: hidden;
  }
  
  button:hover {
    cursor: pointer;
    transition: all .3s ease-in;
    padding-right: 30px;
    padding-left: 30px;
  }

  .btnX{
    background:linear-gradient(to right,rgb(233, 43, 43),rgb(255, 80, 80));
  }
  
  .text_hover a:hover{
    color:rgb(81, 140, 255);
    transition: 1s;
  }

  .underlineMe{
     position: relative;
  }

  .underlineMe::after{
    content: "";
    position: absolute;
    width: 13%;
    border-top: solid 4px red;
    left: 480px;
    bottom: -10px;
    border-radius: 50%;
    height: 8px;
  }

  .underlineMe_Mv{
     position: relative;
  }

  .underlineMe_Mv::after{
    content: "";
    position: absolute;
    width: 17%;
    border-top: solid 4px red;
    left: 0;
    bottom: -10px;
    border-radius: 50%;
    height: 8px;
    margin-left: 650px;
  }

  .underlineMe_Mv1{
    position: relative;
  }
  
  .underlineMe_Mv1::after{
   content: "";
   position: absolute;
   width: 10%;
   border-top: solid 4px red;
   left: 0;
   bottom: -10px;
   border-radius: 50%;
   height: 8px;
   margin-left: 680px;
  }


    /* project button */
    
    .ui-btn {
      --btn-default-bg: rgb(0, 0, 0);
      --btn-padding: 15px 20px;
      --btn-hover-bg: rgba(0, 0, 0, 0.777);;
      --btn-transition: .3s;
      --btn-letter-spacing: .1rem;
      --btn-animation-duration: 1.2s;
      --btn-shadow-color: none;
      --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
      --hover-btn-color: #fff;
      --default-btn-color: #fff;
      --font-size: 16px;
      /* 👆 this field should not be empty */
      --font-weight: 600;
      --font-family: Menlo,Roboto Mono,monospace;
      /* 👆 this field should not be empty */
    }
    

    .tokens{
      margin-left: 10rem;
    }




/*button-card */
.ui-btn {
  box-sizing: border-box;
  padding: var(--btn-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--default-btn-color);
  font: var(--font-weight) var(--font-size) var(--font-family);
  background: var(--btn-default-bg);
  border: none;
  cursor: pointer;
  transition: var(--btn-transition);
  overflow: hidden;
  box-shadow: var(--btn-shadow);
}

.ui-btn span {
  letter-spacing: var(--btn-letter-spacing);
  transition: var(--btn-transition);
  box-sizing: border-box;
  position: relative;
  background: inherit;
}

.ui-btn span::before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  background: inherit;
}

.ui-btn:hover, .ui-btn:focus {
  background: var(--btn-hover-bg);
}

.ui-btn:hover span, .ui-btn:focus span {
  color: var(--hover-btn-color);
}

.ui-btn:hover span::before, .ui-btn:focus span::before {
  animation: chitchat linear both var(--btn-animation-duration);
}

@keyframes chitchat {
  0% {
    content: "#";
  }

  5% {
    content: ".";
  }

  10% {
    content: "^{";
  }

  15% {
    content: "-!";
  }

  20% {
    content: "#$_";
  }

  25% {
    content: "№:0";
  }

  30% {
    content: "#{+.";
  }

  35% {
    content: "@}-?";
  }

  40% {
    content: "?{4@%";
  }

  45% {
    content: "=.,^!";
  }

  50% {
    content: "?2@%";
  }

  55% {
    content: "1}]";
  }

  60% {
    content: "?{%:%";
    right: 0;
  }

  65% {
    content: "|{f[4";
    right: 0;
  }

  70% {
    content: "{4%0%";
    right: 0;
  }

  75% {
    content: "'1_0<";
    right: 0;
  }

  80% {
    content: "{0%";
    right: 0;
  }

  85% {
    content: "]>'";
    right: 0;
  }

  90% {
    content: "4";
    right: 0;
  }

  95% {
    content: "2";
    right: 0;
  }

  100% {
    content: "";
    right: 0;
  }
}




.container_glassA{
  background-color: rgb(9, 9, 9);
  border-radius: 9px;
  width: 30vw;
  padding: 10px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.038);  
}

.container_glass_h1{
  color: #ffe8e8;
}

::-moz-selection{
  background: #450707;
}
::selection{
  background: #450707;
}


    /* myimg_effect */
   
    .myimg{
      -webkit-mask-image:radial-gradient( rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%);
      mask-image:radial-gradient( rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%);
      background-color: #45070767;
      padding-top: 80px;
     }
   
   
     .myimg1{
      -webkit-mask-image:radial-gradient( rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%);
      mask-image:radial-gradient( rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
      background-color: #450707;
      
      
     }


  .gradient{
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.984));
  }


  

   .dot{
    border: dotted 1px;
   }

   .lawn_color{
    background:linear-gradient(to right,rgb(228, 228, 228),rgb(255, 255, 255),rgb(190, 190, 190));
    color:linear-gradient();
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-webkit-background-clip: text;
    -moz-webkit-text-fill-color: transparent;

  }

   .lawn_color1{
    text-align: center;
    font-weight: bolder;
    background:linear-gradient(to right,rgb(255, 75, 75),rgb(255, 43, 64));
    color:linear-gradient();
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-webkit-background-clip: text;
    -moz-webkit-text-fill-color: transparent;
    animation: animateMe 1s ease-in-out infinite alternate;

  }

  .grid_rate{
    display: grid;
   place-content: center;
   grid-template-columns: 1fr 1fr 1fr;
   padding: 40px;
  }


.sec0{
   background-image: url(../src/components/Homepage/images_home/brendan-beale-9lOttUcEkkA-unsplash.jpg);
   background-repeat: no-repeat;
   background-size: cover;
   height: 70vw;
  }

  .glass_containerX{
    width: 100vw;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    position: fixed;
    z-index: 10;
      /* From https://css.glass */
background: rgba(22, 22, 22, 0.104);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.178);

  }



  .glow{
    box-shadow: rgba(255, 255, 255, 0.705) 30px 0 240px 65px;
    height: 60rem;
    width: 40rem;
  }

  .fade_rule{
    margin: 30px 0;
    height: 1px;
    width: 64rem;
    border:  none;
    background:-webkit-gradient(linear, 0 0,100% 0, from(transparent), to(transparent), color-stop(50%, #a4a4a4));
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.396);
  
  }  
  
  .logosY{
    display: grid;
    place-content: center;
    grid-template-columns: 1fr 1fr;
  }

  .choose2{
    display: grid;
    place-content: center;
    grid-template-columns: 1fr 1fr 1fr;
  }


  .choose_glass div{
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.952), rgba(15, 15, 15, 0.903)100% );
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(105, 105, 105, 0.115);
    backdrop-filter: blur(45px);
    -webkit-backdrop-filter: blur(50px);
    border: 1px solid rgba(255, 255, 255, 0.127);     
    height: 20rem;
    width: 27rem;
    padding: 3rem;
    max-width: fit-content;
  }

  .glass_container_bento{
    background: linear-gradient(to bottom, #1d20278e, #1d20278e 100% );
    box-shadow: 0 0 20px rgba(105, 105, 105, 0.086);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border: 1px solid rgba(57, 57, 57, 0.132);     
  }

  .hover_text:hover{
    cursor: pointer;

  }


.glass_container{
    /* From https://css.glass */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.952), rgba(15, 15, 15, 0.903)100% );
border-radius: 16px;
box-shadow: 0 0 20px rgba(105, 105, 105, 0.084);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.178);     
height: 26rem;
width: 25rem;
/* margin-left: -3rem; */

}
.glass_container3{
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.952), rgba(15, 15, 15, 0.903)100% );
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(105, 105, 105, 0.084);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.178);     
  height: 26rem;
  width: 25rem;
  /* margin-left: -7rem; */
  /* margin-top: -4rem; */
}

.glass_container1{
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.952), rgba(15, 15, 15, 0.903)100% );
border-radius: 16px;
box-shadow: 0 0 20px rgba(105, 105, 105, 0.084);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.178);     
height: 26rem;
width: 25rem;
/* margin-left: -7rem; */

}

.glass_container4{
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.952), rgba(15, 15, 15, 0.903)100% );
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(105, 105, 105, 0.084);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.178);     
  height: 26rem;
  width: 25rem;
  /* margin-left: -3rem;
  margin-top: -4rem; */

}

.glass_container5{
    /* From https://css.glass */
background: rgb(26, 26, 26);
border-radius: 30px;
box-shadow: 0 0 20px rgba(105, 105, 105, 0.084);
backdrop-filter: blur(25px);
-webkit-backdrop-filter: blur(25px);
border: 1px solid rgba(40, 40, 40, 0.178);
height: 13rem;
width: 14rem;
}

.glass_container6{
    /* From https://css.glass */
background:linear-gradient(to bottom, rgba(134, 134, 134, 0.221),rgba(23, 23, 23, 0.473)) ;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.178);
height: 12rem;
width: 20rem;

}

.glass_container7{
    /* From https://css.glass */
background: rgba(60, 60, 60, 0.14);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.171);
height: 42rem;
width: 58rem;
padding: 5rem;
}

.containerQ{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
  margin-left: -32rem;
}

.btnQ{
  background: rgba(48, 48, 48, 0.43);
  border:2px solid white;
  border-radius: 360px;
  height: 3rem;

}


.glass_containerQ{
    /* From https://css.glass */
background: rgba(60, 60, 60, 0.14);
border-radius: 10px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.171);
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
}

.card_box {
  margin: auto;
  width: 30em;
  height: 25rem;
  background: linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%);
  position: relative;
  box-shadow: 0 25px 50px rgba(0,0,0,0.55);
  cursor: pointer;
  transition: all .3s;
}

.card_box_height{
  margin-top: 20rem;
  margin: auto;
  width: 30em;
  height: 45rem;
  background: linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%);
  position: relative;
  box-shadow: 0 25px 50px rgba(0,0,0,0.55);
  cursor: pointer;
  transition: all .3s;
}



.card_box span {
  position: absolute;
  overflow: hidden;
  width: 150px;
  height: 150px;
  top: -10px;
  left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card_box span::before {
  content: 'Most Popular';
  position: absolute;
  width: 150%;
  height: 40px;
  background-image: linear-gradient(45deg, #ff6547 0%, #ffb144  51%, #ff7053  100%);
  transform: rotate(-45deg) translateY(-20px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 5px 10px rgba(0,0,0,0.23);
}

.card_box span::after {
  content: '';
  position: absolute;
  width: 10px;
  bottom: 0;
  left: 0;
  height: 10px;
  z-index: -1;
  box-shadow: 140px -140px #cc3f47;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
}


.tilt-in-fwd-tr {
	-webkit-animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
/* ----------------------------------------------
 * Generated by Animista on 2024-8-3 0:22:35
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tilt-in-fwd-tr
 * ----------------------------------------
 */
 @-webkit-keyframes tilt-in-fwd-tr {
    0% {
      -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
              transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
              transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
  @keyframes tilt-in-fwd-tr {
    0% {
      -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
              transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
              transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
  

  .slide-in-fwd-bl {
	-webkit-animation: slide-in-fwd-bl 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-fwd-bl 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-8-3 0:24:13
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-fwd-bl
 * ----------------------------------------
 */
 @-webkit-keyframes slide-in-fwd-bl {
    0% {
      -webkit-transform: translateZ(-1400px) translateY(800px) translateX(-1000px);
              transform: translateZ(-1400px) translateY(800px) translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
              transform: translateZ(0) translateY(0) translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-fwd-bl {
    0% {
      -webkit-transform: translateZ(-1400px) translateY(800px) translateX(-1000px);
              transform: translateZ(-1400px) translateY(800px) translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
              transform: translateZ(0) translateY(0) translateX(0);
      opacity: 1;
    }
  }


/* teamcard */
/* From Uiverse.io by alexruix */
.card {
  border:1px solid #ffffff09;
  width: 220px;
  height: 254px;
  background: #0c0c0c;
  padding: 2rem 1.5rem;
  transition: box-shadow .3s ease, transform .2s ease;
  }
  
  .card-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform .2s ease, opacity .2s ease;
  }
  
  /*Image*/
  .card-avatar {
  --size: 90px;
  background: linear-gradient(to top, #f1e1c1 0%, #fcbc97 100%);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  transition: transform .2s ease;
  margin-bottom: 1rem;
  }
  
  /*Card footer*/
  .card-social {
    gap: 10px;
    margin: auto;
  transform: translateY(200%);
  display: flex;
  justify-content: space-around;
  opacity: 0;
  transition: transform .2s ease, opacity .2s ease;
  }
  
  .card-social__item {
  list-style: none;
  }
  
  .card-social__item svg {
    margin: auto;
    place-content: center;
  display: flex;
  height: 18px;
  width: 18px;
  fill: #515F65;
  cursor: pointer;
  transition: fill 0.2s ease ,transform 0.2s ease;
  }
  
  /*Text*/
  .card-title {
  color: #fff;
  font-size: 1.1em;
  font-weight: 600;
  line-height: 2rem;
  }
  
  .card-subtitle {
  color: #9caab3;
  font-size: 0.8em;
  }
  
  /*Hover*/
  .card:hover {
  box-shadow: 0 8px 50px #23232333;
  }
  
  .card:hover .card-info {
  transform: translateY(-5%);
  }
  
  .card:hover .card-social {
  transform: translateY(100%);
  opacity: 1;
  }
  
  .card-social__item svg:hover {
  fill: #e7e7e7;
  transform: scale(1.1);
  }
  
  .card-avatar:hover {
  transform: scale(1.1);
  }


  /* media_queries */
  @media screen and (max-width:720px) {
 

       *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        
     }
    

       body,html{
          scroll-behavior: smooth;
          overflow-x: hidden;
       }


       .glass_containerX{
        display: block;
        height: 5rem;
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
       }


       /* size-adjust of glass_container */
      
      .glass_container1,.glass_containerY,.glass_container3,.glass_container4{
          /* From https://css.glass */
          background: rgba(22, 22, 22, 0.582);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.178);
          height: 28rem;
          width: 20rem;
          display: grid;
          place-content: center;
          margin: auto;
      }

      .choose_glass{
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.952), rgba(15, 15, 15, 0.903)100% );
        border-radius: 45px;
        box-shadow: 0 0 20px rgba(105, 105, 105, 0.115);
        backdrop-filter: blur(45px);
        -webkit-backdrop-filter: blur(50px);
        border: 1px solid rgba(255, 255, 255, 0.127);     
        height: 140rem;
        max-width: fit-content;
        margin: auto;
        display: grid;
        place-content: center;
        margin-bottom: 18rem;
        display: grid;
      
      }

      /* .choose_glass{
        width: 22rem;
        padding: 10px;
        display: grid;
        place-content: center;
        margin: auto;
    } */


       .ul_list{
        display: none;
       }   

       .logo{
        margin-left: -2.5rem;
        display: none;
       }


       .text1{
        text-wrap: wrap;
        font-size: 10rem;
        padding: 60px;
        padding-top: 8rem;
       }



       /* .text2{
        text-wrap: wrap;
        font-size: 15px;
        padding: 20px;
        margin-top: -2.5rem;
       } */

       .lawn_color1{
        font-size: 5rem;
       }

       .choose{
         margin-left: -3rem;
         font-size: 3.5rem; 
      }

      .chooseX{
        margin-top: -5rem;
      }


      .containerQ{
        display: grid;
        place-content: center;
        margin: auto;
        margin-top: -25rem;
        margin-left: -46rem;
      }

      .containerY{
        margin-left: -22rem;
        margin-top:62rem;
        
      }

      .glass_container3{
          margin-top: -2rem;
      }

      .containerX{
        margin-left: -22rem;
        margin-top: 29rem;
      
      }

      .fade_rule{
        width: 350px;
      }
     
      .text3{
        margin-left: -4rem;
        font-size: 60px;
      }

      .text3_p{
        font-size: 22px;
        margin-left: -4rem;
      }

      .img16{
        margin-left: -5rem;
        margin-top: -4rem;
      }

      .img16X{
        width: 40rem;
        height: 30rem;
        
      }

      .join{
        margin-top: 28rem;
        margin-left: -3rem;
        position: absolute;
      }

      .glow{
        width: 1px;
        height: 1px;
      }
    

      .tokens{
        margin: auto;
        margin-top: 35rem;
        display: grid;
        place-content: center;
      }

      .img11{
        margin: auto;
        height: 3.4rem;
        width: 4rem;
      }

      .token1{
        width: 7rem;
        height: 5rem;
        padding: 20px;
      }


      .img12{
        height: 3rem;
        width: 3rem;
        margin: auto;
      }

      .token2{
        text-wrap: nowrap;
        width: 7rem;
        height: 5rem;
        padding: 20px;
      }

      .img13{
        margin: auto;
        height: 2.8rem;
        width: 3.2rem;
        object-fit: contain;
      }

      .token3{
        text-wrap: nowrap;
        width: 7rem;
        height: 5rem;
        padding: 20px;
      }
      .img14{
        margin: auto;
        height: 3.3rem;
        width: 3.3rem;
      }

      .token4{
        margin-top: -.8rem;
        text-wrap: nowrap;
        width: 7rem;
        height: 5rem;
        padding: 20px;
      }

      .img15{
        margin: auto;
        height: 3.4rem;
        width: 4rem;
      }

      .token5{
        margin-top: -.8rem;
        width: 7rem;
        height: 5rem;
        padding: 20px;
      }


      .text4{
        font-size: 30px;
      }

      .text4_p{
        font-size: 20px;
      }


      .grid_rate{
        display: grid;
       place-content: center;
       grid-template-columns: 1fr

      }

      .rate{
        font-size: 50px;
      }

  
      .rate_p{
        font-size: 10px;
        text-align: center;
        display: grid;
        place-content: center;
      }

      .watchword{
        font-size: 50px;
      }

      .percent_grid{
        display: grid;
        place-content: center;
        margin: auto;
      }

      .percent_grid_text{
        margin: auto;
        display: grid;
        place-content: center;
       font-size: 40px;
       margin-left: 3rem; 

      }

      .percent_grid_p{
        text-align: center;
        display: grid;
        place-content: center;
       font-size: 40px;

      }
   
      .text5{
        text-wrap: wrap;
        font-size: 33px;
        padding: 10px;
      }

      .glass_container7{
        width: 22rem;
        padding: 10px;
      }

      .text6{
        font-size: 40px;
        margin-left: 1.5rem;
      }

    .text6_p{
        font-size: 20px;
        color: white;
      }
  
    .img17{
      width: 4.5rem;  
      height: 4.5rem;  
      }

     .footer_text{
      font-size:30px;
     }

     .footer{
      margin-top: -18rem;
      margin-left: -1rem;
      text-wrap: wrap;
     }

    .FAQ{
         margin: auto;
         width: 22rem;
    }

    .FAQ_h1{
      margin-bottom: 3rem;
    }


     .text7{
      font-size: 17px;
     }
     
     .text8{
      font-size: 15px;
     }

     .copy{
      padding: 12px
     }

     .rate_up{
      margin-top: -2rem; 
     }

     .boost{
      gap: 20px;
      display: flex;
      padding: 25px; 
      margin: auto;
      place-content: center;
    
    }

    .fasttrack{
      position: absolute;
      font-size: 25px;
      margin-left: 3.4rem;
      font-weight: bolder;
      margin-top: 17px;
    }

    .textX{
      display: grid;
      place-content: center;
    }

    .h5_text{
      padding-top: 1rem;
      margin-left: -.0005rem;
    }

 
    }



@media screen and (max-width:1080px) {
    .socials{
      margin-top: -13rem;
    }

    .ui-btn1{
      margin-top: 4rem;
    }
    .ui-btnQ{
      margin-top: -39rem;
    }

    .teamCard{
      display: grid;
     
    }


    
}




  @media screen and (max-width:720px) {
 

       *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        
     }
    

       body,html{
          scroll-behavior: smooth;
          overflow-x: hidden;
       }


       .glass_containerX{
        display: block;
        height: 5rem;
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
       }

       .container_glassY{
        grid-template-columns: 1fr;
        display: grid;
        place-content: center;
        margin: auto;
        margin-top: 13rem;
        font-weight: lighter;
   }

   .container_glassA{
     height: 26vh;
     width: 21rem;
     border: 1px solid rgba(75, 75, 75, 0.095);
     background-color: rgb(10, 10, 10);
     border-radius: 10px;
     padding: 10px;
     
   }

   .underlineMe{
    position: relative;
 }

 .underlineMe::after{
   content: "";
   position: absolute;
   width: 60%;
   border-top: solid 4px red;
   left: 0;
   bottom: -10px;
   border-radius: 50%;
   height: 8px;
   margin-left: 100px;
 }

 .underlineMe_Mv1{
  position: relative;
}

.underlineMe_Mv1::after{
 content: "";
 position: absolute;
 width: 20%;
 border-top: solid 4px red;
 left: 0;
 bottom: -10px;
 border-radius: 50%;
 height: 8px;
 margin-left: 200px;
}



       /* size-adjust of glass_container */
      
      .glass_container1,.glass_containerY,.glass_container3,.glass_container4{
          /* From https://css.glass */
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.952), rgba(15, 15, 15, 0.903)100% );
          border-radius: 16px;
          box-shadow: 0 0 20px rgba(105, 105, 105, 0.084);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.178);
          height: 30rem;
          width: 20rem;
          display: grid;
          place-content: center;
          margin: auto;
          justify-content: center;
          align-items: center;
      }

       .ul_list{
        display: none;
       }   

       .logo{
        margin-top: -14px;
        margin-left: -1.5rem;
        display: block;
        height: 6.5rem;
       }

       .logo1{
        display: block;
        height: 8rem;
        margin-left: -3.5rem;
        margin-top: -2rem;
       }

       .partners{
        margin: auto;
        display: grid;
        place-content: center;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 10rem;
      }

      .about_Us{
        margin-top: 5rem;
        grid-template-columns: 1fr;
        place-content: center;
        display: grid;
      }

      .about_Us_P{
        max-width: 20rem;
        text-wrap: wrap;
        margin: auto;
        text-align: center;
        font-size: 22px;
        display: grid;
      }

      .about_Us_P_Grid{
        display: grid;
        place-content: center;
        text-align: center;
        margin: auto;
      }

      .img24{
        margin: auto;
         width: 21rem;
      }
      .img24X{
         width: 18rem;
      }

      .who_we_are{
        margin-left: -3rem;
      }

      
      .img0_box{
        width: 11rem;
        height: 6rem;
      }

       .text1{
        text-wrap: wrap;
        font-size: 3.5rem;
        padding: 60px;
        padding-top:13rem;
        margin-left: -2rem;
       }

       .socials{
        margin-left: 6rem;
       }

       .ui-btn{
        margin-left: -1rem;
       }

       .ui-btn2{
         margin: auto;
         margin-top: -5rem;
         margin-left: 3rem;
       }
       
       .text2{
        text-wrap: wrap;
        font-size: 15px;
        padding: 20px;
        margin-top: -2.5rem;
       }

       .cont0{
        margin: auto;
        margin-bottom: -25rem;
       
       }

       .cont1{
        display: block;
        display: grid;
        max-width: 25rem;
        margin: auto;
        place-content: center;
        margin-top: -8rem;
       }

       .cont2{
        display: grid;
        margin: auto;
        width: 20rem;
        display: grid;
        height: 18rem;
        margin-top: -7rem;
       }

       .cont3{
        width: 20rem;
        height: 32rem;
        margin-top: 38rem;
       }

       .cont4{
        width: 20rem;
        height: 10rem;
        margin-top: -2.3px;
      }

       .cont5{
        margin-top: -46rem;
        padding-bottom: 26rem;
         height: 30rem;
         width: 20rem;
       }

       .cont6{
        display: none;
       }

       .cont7{
        margin-top: -52.5rem;
        height: 20rem; 
        width: 20rem;
      }

      .cont8{
        margin-top: -23.7rem;
        height: 30rem;
        width: 20rem;
      }
       

       .lawn_color{
        text-align: center;
        font-size: 1.8rem;
        text-wrap: wrap;
        
       }

       .lawn_color1{
        text-wrap: wrap;
        font-size: 4.5rem;
      } 

       .choose{
         margin-left: -1rem;
         font-size: 3.5rem; 
         margin-bottom: 8rem;
      }
      .chooseX{
        margin-top: 2rem;
        margin-bottom: -40rem;


      }

      .choose2{
        margin-top: 26rem;
        font-size: 18px;
        display: grid;
        place-content: center;
        grid-template-columns: 1fr;
        text-wrap: wrap;
        padding: 25px;
      }

   


      .containerQ{
        display: grid;
        place-content: center;
        margin: auto;
        margin-top: 95rem;
        margin-left: -65rem;
        justify-content: center;
        align-items: center;
      }

      .containerY{
        width: 20rem;
        height: 28rem;
        margin-left: -27.5rem;
        margin-top:62rem;
        margin-bottom:2rem;
        
      }

      .glass_container3{
          margin-top: -2rem;
      }

      .containerX{
        margin-left: -27.5rem;
        margin-top: 28rem;
      
      }

      .fade_rule{
        width: 350px;
      }
     
      .text3{
        margin: auto;
        font-size: 35px;
        margin-top: 10rem;
      }

      .text3_p{
        text-align: left;
        margin: auto;
        padding: 50px;
        font-size: 22px;
        text-wrap: wrap;
        margin-top: -4rem;
        margin-left: -2rem;
      }

      .btnQ{
        margin-top: 28rem;
        margin-left: -25rem;
      }

      .img16{
        display: grid;
        place-content: center;
        margin: auto;
        margin-top: -4rem;
      }

      .img16X{
        width: 40rem;
        height: 33rem;
        margin-top: 5rem;
        
      }

      .join{
        margin-top: 28rem;
        margin-left: -3rem;
        position: absolute;
      }

      .glow{
        width: 1px;
        height: 1px;
      }
    

      .tokens{
        margin-top: 5rem;
        margin-bottom: -20rem;
        display: grid;
        place-content: center;
        grid-template-columns: 1fr;
      }

      .img11{
        margin: auto;
        height: 3.4rem;
        width: 4rem;
        display: none;
      }

      .token1{
        width: 17rem;
        height: 6rem;
        padding: 20px;
      }


      .img12{
        height: 3rem;
        width: 3rem;
        margin: auto;
        display: none;
      }

      .token2{
        text-wrap: nowrap;
        width: 17rem;
        height: 6rem;
        padding: 20px;
      }

      .img13{
        margin: auto;
        height: 2.8rem;
        width: 3.2rem;
        object-fit: contain;
        display: none;
      }

      .token3{
        text-wrap: nowrap;
        width: 17rem;
        height: 6rem;
        padding: 20px;
      }
      .img14{
        margin: auto;
        height: 3.3rem;
        width: 3.3rem;
        display: none;
      }

      .token4{
        text-wrap: nowrap;
        width: 17rem;
        height: 6rem;
        padding: 20px;
      }

      .img15{
        margin: auto;
        height: 3.4rem;
        width: 4rem;
        display: none;
      }

      .token5{
        width:17rem;
        height: 6rem;
        padding: 20px;
      }
      .token6{
        width: 17rem;
        padding: 20px;
      }


      .text4{
        font-size: 30px;
      }

      .text4_p{
        font-size: 20px;
      }


      .marquee{
        position: absolute;
        margin-top: -73rem;
      }

      .marquee_text{
        text-align: center;
        display: grid;
        place-content: center;
        margin: auto;
        margin-bottom: 3rem;
      }

      .maq-width{
        width: 20rem;
      }

      .partners{
         margin-top: 7rem;
         margin-bottom: 5rem;
         display: grid;
         place-content: center;
         grid-template-columns: 1fr 1fr;
         gap: 15px;
      }

      .partner_text{
        display: grid;
        place-content: center;
        position: absolute;
        text-align: center;
        margin: auto;
        font-size: 24px;
        text-wrap: wrap;

      }

      .partners1{
         margin: auto;
         display: grid;
         place-content: center;
         margin-top: 20rem;
      
      }

      .teamCard{
        display: grid;
      }

      .team_Top{
        margin-top: -30rem;
      }

      .footer_text{
        text-wrap: wrap;
        margin-top: 7rem;
        font-size: 10px;
        position: relative;
        margin-left: -55rem;
        right: -9rem;
      }

      .footer_text1{
        text-align: center;
        font-size: 5.5rem;
      }

      .footer_links{
        text-wrap: nowrap;
        gap: 4rem;
        margin-top: 12rem;
        margin-left: -58rem;
      }

      .grid_rate{
        display: grid;
        place-content: center;
        gap: 7rem;
      }

      .rate{
        font-size: 65px;
      }

      .rate_p{
        font-size: 23px;
        text-align: center;
        display: grid;
        place-content: center;
      }

      .watchword{
        font-size: 50px;
      }

      .percent_grid{
        display: grid;
        place-content: center;
        margin: auto;
      }

      .percent_grid_text{
        text-align: center;
        margin: auto;
        display: grid;
        place-content: center;
       font-size: 40px;

      }

      .percent_grid_p{
        text-align: center;
        display: grid;
        place-content: center;
       font-size: 30px;

      }
   
      .text5{
        margin-top: 6rem;
        text-wrap: wrap;
        font-size: 33px;
        padding: 10px;
      }

      .glass_container7{
        width: 22rem;
        padding: 10px;
      }

      .text6{
        font-size: 35px;
        margin-left: -1.5rem;
        margin-top: 1rem;
      }

    .text6_p{
        font-size: 20px;
        color: white;
      }
  
    .img17{
      width: 4.5rem;  
      height: 4.5rem;  
      }

     .footer_text{
      font-size:30px;
     }

     .footer{
      display: grid;
      margin-top: -8rem;
      margin-left: -1rem;
      text-wrap: wrap;
     }

     .text7{
      font-size: 17px;
     }
     
     .text8{
      font-size: 15px;
     }

     .copy{
      padding: 12px
     }

     .rate_up{
      margin-top: -2rem; 
     }

     .boost{
      gap: 20px;
      display: flex;
      padding: 25px; 
      margin: auto;
      place-content: center;
    
    }

    .fasttrack{
      font-size: 26px;
      margin-left: 75px;
      font-weight: bolder;
      margin-top: 17px;
    }

    .textX{
      display: grid;
      place-content: center;
    }

    .h5_text{
      padding-top: 1rem;
      margin-left: -.0005rem;
    }

    }
  


    /* landscapeview */
    @media screen and  (max-width:1080px) and (orientation:landscape) {
     body,html{
      overflow-x: hidden;

     }
     
      nav{
        max-width: 100%;
      }

      .ul_list{
          margin:auto
      }
      
      .FAQ{
        margin: auto;
        width: 32rem;
   }

      .buttonY{
        margin-top: 25rem;
      }

       .tokens{
        margin-left: -2rem;
        
      }


      .partners{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }

      .img16{
        margin-left: 10rem;
        margin-top: -45rem;
      }

      .img16X{
        width: 20rem;
        height: 50rem;
       }

        .socials{
        margin-top: -10rem;
       }
       .ui-btn{
        margin-top: -37.3rem;
       }
       .ui-btn1{
        margin-top: 3rem;
       }

       .video_height{
        height: 50rem;
       }

       .text1{
        margin-top: -54rem;
       }

       .text3_p{
        max-width: 25rem;
        margin-left: -2rem;
       }

       .fade_rule{
        margin-top: -8rem;
       }

       .img16X{
        margin-left: 13rem;
        margin-top: 6rem;
       }

       .tokens{
        margin-left: 1.5rem;
       }

       .token1,.token2,.token3,.token4,.token5,.token6{
        width: 10rem;
        height: 10rem;
        margin-left: -1rem;
       }

       .img11,.img12,.img13,.img14,.img15{
        width: 6rem;
        height: 4rem;
        margin: auto;
        object-fit: contain;
       }

       .token_text{
        text-wrap: wrap;
        font-size: 24px;
       }

       .container_glassA{
        width: 18rem;
        margin: auto;
        height: 14rem;
       }

       .container_glassY{
        margin: auto;
        display: grid;
        place-content: center;
        grid-template-columns: 1fr 1fr;
       }

       .landscape_marquee{
        width: 20rem;
       }

       
   .underlineMe{
    position: relative;
 }

 .underlineMe::after{
   content: "";
   position: absolute;
   width: 60%;
   border-top: solid 4px red;
   left: 0;
   bottom: -10px;
   border-radius: 50%;
   height: 8px;
   margin-left: 50px;
 }

   .underlineMe_Mv{
    position: relative;
 }

 .underlineMe_Mv::after{
   content: "";
   position: absolute;
   width: 60%;
   border-top: solid 4px red;
   left: 0;
   bottom: -10px;
   border-radius: 50%;
   height: 8px;
   margin-left: 160px;
 }

 
 .underlineMe_Mv2{
  position: relative;
}

.underlineMe_Mv2::after{
 content: "";
 position: absolute;
 width: 18%;
 border-top: solid 4px red;
 left: 0;
 bottom: -10px;
 border-radius: 50%;
 height: 8px;
 margin-left: 345px;
}



       
       .choose2{
        margin-top: 27rem;
        display: grid;
        grid-template-columns:  1fr;
        place-content: center;
        height: 75rem;
        margin-top: 4rem;
        padding: 30px;
       }

      /* .containerQ{
        margin-top: 23rem;
        display: grid;
        grid-template-columns: 1fr;
        place-content: center;
        margin-left: -57.5rem;
      } */

      .glass_container1,.glass_container3,.glass_container4,.glass_container{
        width: 40rem;
      }
      .glass_container4{
        margin-top: -2rem;
      }

      .text10{
        font-size: 22px;
      }

      .text11{
        font-size: 27px;
      }

      .grid_rate{
        display: grid;
        place-content: center;
        grid-template-columns: 1fr 1fr;
        margin: 4rem;
        margin-top: -1rem;
        gap: 9rem;

      }

      .rate_p_up{
        margin-top: -5rem;
      }

      .percent_grid{
       display: grid;
       place-content: center;
      }

      .glass_container7{
        width: 43rem;
      }

      .text5{
        text-wrap: wrap;
       font-size:2.6rem;
      }

      .img15{
        object-fit: contain;
      }

      .fade_ruleX{
        margin-top: -1rem;
        margin-bottom: 10rem;
      }

    .fade_rule{
      position: absolute;
      margin-top: -1rem;
      margin-left: -19rem;
        width: 650px;
      }

      .lawn_color2{
        font-size: 100px;
      }

      .lawn_color{
        font-size: 45px;
      }

      .service_size{
        font-size: 80px;
      }

      .chooseX{
        font-size: 80px;
        margin-top: -6rem;
      }

    }

