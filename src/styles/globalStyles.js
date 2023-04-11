import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::before,*::after, html, body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    line-height: 1.6;
    scroll-padding-top: 2rem;


}

:root {
--primary-color: #ffff;
/* --primary-color: #000000; */
--color-gray: #cccccc;
--color-gray-lyt: #eeeeee;
--dim-gray: rgb(94, 92, 92);
--aliceblue: #eff4ff;
--color-gray-dark: #181818;
--color-white: #ffffff;
--gray-and-black: linear-gradient( to bottom left, var(--color-gray-lyt),var(--color-gray), var(--blueViolet-lyt) );
--default-font: 'Inter', sans-serif;
// --default-font: 'Space Grotesk', sans-serif; 
--transition: all .5s ease-in-out;
--default-font-size: 1rem;
--blueViolet: blueviolet;
--blueViolet-lyt: rgba(137, 43, 226, 0.514);
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.2rem;
  background:var(--color-white);  
}

::-webkit-scrollbar-track {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  -webkit-margin-before: 4.5rem;
  margin-block-start: 4.5rem;
  box-shadow: inset 0 0 6px var(--color-white);
}


::-webkit-scrollbar-thumb {
  background-color:var(--blueViolet);
  border-radius: 1rem;
  border: 2px inset var(--blueViolet);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}  




body {
    -webkit-font-smoothing: antialised;
    font-family: var(--default-font);
background: var(--gray-and-black);
background-color: var(--color-gray-lyt);
font-size:var(--default-font-size);
background-position: center;
background-size:cover;
background-repeat:no-repeat;

/* &::before,&::after{
  content: "";
  position:absolute;
  inset: 0;
  
} */
/* &::after{
  z-index: -2;
  background-image: linear-gradient(30deg , var(--color-gray) 12%, transparent 12.5%, transparent 87%, var(--color-gray) 87.5%, var(--color-gray)),
  linear-gradient(150deg , var(--color-gray) 12%, transparent 12.5%, transparent 87%, var(--color-gray) 87.5%, var(--color-gray)),
   linear-gradient(30deg , var(--color-gray) 12%, transparent 12.5%, transparent 87%, var(--color-gray) 87.5%, var(--color-gray)),
   linear-gradient(150deg , var(--color-gray) 12%, transparent 12.5%, transparent 87%, var(--color-gray) 87.5%, var(--color-gray)),
   linear-gradient(60deg , var(--dim-gray) 25%, transparent 25.5%, transparent 75%, var(--dim-gray) 75%, var(--dim-gray)),
   linear-gradient(60deg , var(--dim-gray) 25%, transparent 25.5%, transparent 75%, var(--dim-gray) 75%, var(--dim-gray));
   background-size: 20px 80px;
   background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
   opacity: 0.5;
   /* background-blend-mode: multiply; 
  }
  
  &::before{
    z-index: -1; 
    background-color: rgba(137, 43, 226, 0.514);
}*/

}




.df{
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 45rem) {
        justify-content: space-between;
    }

}




 .fdirc{
    flex-direction: column;
} 
 .jsb{
     flex-direction: column;
     @media screen and (min-width: 45rem) {
    justify-content: space-between;
    flex-direction: row;

    }

} 
.jcc{
justify-content: center;
} 

 .aic{
    align-items: center;

}
 .tac{
text-align: center;
}


.hamburger{
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  height: 100%;


  &::before,
  ::after {
    content: "";
    border-radius: 2rem 0 0 2rem;
    position: absolute;
    background-color: var(--color-gray-dark);
    height: 2px;
    transition: width 1s ease-in-out;
  }
  &::before {
    width: 65% !important;
    padding: 0.1rem;
    top: 20%;
    transition: width .5s ease-in-out;

  }
  &::after {
    bottom: 20%;
    width: 65% !important;
    padding: 0.12rem;
    background: var(--blueViolet);
    transition: width .5s ease-in-out;

  }
  div {
    background-color: var(--color-gray-dark);
    height: 2px;
    width: 50% !important;
    border-radius: 2rem 0 0 2rem;
    padding: 0.1rem;
    transition: width .5s ease-in-out;
  }

}

.next_page{
    padding-bottom: 2rem;
    button{
    text-transform: capitalize;
    width: max-content;
    border-radius: 2rem !important;
    padding: 0.9rem 1rem !important;
    cursor: pointer;
    @media screen and (min-width: 64rem) {
        padding: 0.9rem 2.5rem !important;
        font-size: inherit;


    }
    }
}

.textBox{
    gap: 1.3rem;
    width: 100%;
    font-family: inherit;
    align-items: center;
    justify-content: center;
    
    @media screen and (min-width: 45rem) {
        align-items: flex-start;
            justify-content: flex-start;
    }
    

h1, h2, h3{
    letter-spacing: -1.296px;
    font-weight: 900;
    font-size: 2rem;
    text-align: center;
    line-height: 2.5rem;
    /* color:var(--color-gray-dark); */

    word-wrap: normal;
    @media screen and (min-width: 45rem) {
        line-height: 3.5rem;
    font-size: 2.8rem;
    text-align: left;
    
}

}
p{
    font-size: 1rem;
    line-height: 1.9rem;
    text-align: center;
    width: 100%;
    word-wrap: normal;
    /* color:var(--color-gray-dark); */

    @media screen and (min-width: 45rem) {
        text-align: left;
    }
}

button{
    background: var(--primary-color);
    color: var(--color-white);
    text-transform: capitalize;
    width: max-content;
    border-radius: 2rem;
    font-size: inherit;
    padding: 0.9rem 2.5rem;
    cursor: pointer;
    font-weight: bold;

}
}
.bold{
    font-weight: bold;

}
.imageBox{
    width: 100%;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  transform: translateY(-50%);
  color: var(--blueViolet);
  font-weight: bold;
  font-size: 15px;
  transition: 0.6s ease;
  background: var(--primary-color);
  box-shadow: 2px 2px 5px var(--color-gray-dark);
  user-select: none;
  z-index: 10;

 & >*{
margin: 0 auto;
  pointer-events: none;

  }

}
.add {
  cursor: pointer;
  position: absolute;
  top: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  color: var(--color-white);
  border: 2px solid var(--color-gray);
  font-weight: bold;
  font-size: 15px;
  transition: 0.6s ease;
  background: var(--blueViolet);
  user-select: none;
  z-index: 10;
  right: 1%;
  bottom:0;

  &:hover{
    color:var(--blueViolet);
    background: var(--color-white);
  }

 & >*{

  pointer-events: none;

  }

}

.next {
  right: 1%;
}
.prev {
  left: 1%;
}

@media screen and (max-width: 40rem) {

  .prev, .next{
    font-size: 1rem;

  }

}

.prev:hover, .next:hover {
  background: var(--blueViolet) ;
  color:var(--color-white) ;
  
}

.expand{
  width: 100%;
}

.reduce_padding{
  padding: 0.7rem .5rem !important;
}


.videoBox{
    width: 100%;
    border-radius: 2rem;
    overflow: hidden;
    
}

.current{
display: block;
position: relative;


&::before{
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    right: 0;
    height: 2px;
    background-color: var(--color-gray);
    transition: var(--transition);


}

&:active::before{
        width: 100% !important;
        left: 0 !important;
        background-color: yellow !important;
    }




}

.grid{
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  align-items: start;
  /* place-items: center; */


  @media screen and (min-width: 45rem) {
      place-items:start;
      grid-template-columns:  1fr;

  }
  @media screen and (min-width: 65rem) {
      gap: 2rem;

  }
}
.grid-wrap{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  width: 100%;
  align-items: start;
  place-items: center;


  @media screen and (min-width: 45rem) {
      place-items:start;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  }
}

/*.hero{

  /* @media screen and (max-width: 64rem) {
    grid-template-columns: 24% 20% 20% 24%;
  } 

}*/

.lists{
width: 100%;
    .list{
        width: 100%;
        gap: 1rem;
        li{
        font-size: 1rem;
        line-height: 1.9rem;
        //text-align: center !important;
        width: 100%;
        word-wrap: normal;
        @media screen and (min-width: 45rem) {
         //   text-align: left !important;
        }
    }


       } 
     h2{
    letter-spacing: -1.296px;
    font-weight: 900;
    font-size: 2rem;
    text-align: center;
    line-height: 2.5rem;
    word-wrap: normal;

    @media screen and (min-width: 45rem) {
        line-height: 3.5rem;
    font-size: 2.8rem;
    text-align: left;
    
}
       }
       button{
    background: var(--color-white);
    color: var( --primary-color);
    text-transform: capitalize;
    width: max-content;
    border-radius: 2rem;
    font-size: inherit;
    padding: 0.9rem 2.5rem;
    cursor: pointer;
    font-weight: bold;
    transition: var(--transition);
&:hover{
    color: var(--color-white) !important;
    background-color: var(--primary-color) !important;

}

}
}
.span-2{
    grid-column: span 1;

    @media screen and (min-width: 45rem) {
        grid-column: span 2;
    }
    
}

.brand{
width: fit-content;
margin-right: auto;
margin-left: 0;

@media screen and (min-width: 45rem) {
    margin-left: -53px;
    width: fit-content;
}
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

}


}

a{
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
}

.cover{
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}



 [data-title] {
    position: relative; 
}

[data-title]::after {
content: attr(data-title);
width: 140px;
left: calc(50% - 70px);
background-color: #000000;
color: var(--primary-color);
font-size: 0.8rem;
text-align: center;
top: 125%;
font-weight: bold;
position: absolute;
padding: 1px 5px 2px;
transform: translateY(-10px);
transition: opacity 0.3s, transform 0.2s;
white-space: nowrap;
border-radius: 10px;
box-shadow: 1px 1px 3px #222222;
opacity: 0;
border: 1px solid #111111;
z-index: 99999;
visibility: hidden;
}

@media screen and (min-width: 64rem) {
  [data-title]:hover::after {
 opacity: 1 ;
 visibility: visible ;
 transform: translateY(0);
 
 } 
}
.reveal{
  opacity: 1 !important ;
visibility: visible !important ;
transform: translateY(0) !important;
pointer-events: all !important;

}


/* [data-title] {
  position: relative;
  cursor: pointer;
}
[data-title]::before,
[data-title]::after {
  line-height: 1;
  font-size: .9em;
  pointer-events: none;
  position: absolute;
  /* box-sizing: border-box; 
  display: none;
  opacity: 0;
}
[data-title]::before {
  content: "";
  border: 5px solid transparent;
  z-index: 100;
}
[data-title]::after {
  content: attr(data-title);
  text-align: center;
  min-width: 3em;
  max-width: 21em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 12px;
  border-radius: 9px;
  background: #4621FF;
  color: #FFFFFF;
  z-index: 99;
  text-shadow: 2px 0px 0px #800000;
}
[data-title]:hover::before,
[data-title]:hover::after {
  display: block !important;
  opacity: 1;
}
[data-title]:not([data-flow])::before,
[data-title][data-flow="top"]::before {
  bottom: 100%;
  border-bottom-width: 0;
  border-top-color: #4621FF;
}
[data-title]:not([data-flow])::after,
[data-title][data-flow="top"]::after {
  bottom: calc(100% + 5px);
}
[data-title]:not([data-flow])::before, [title]:not([data-flow])::after,
[data-title][data-flow="top"]::before,
[data-title][data-flow="top"]::after {
  left: 50%;
  -webkit-transform: translate(-50%, -4px);
          transform: translate(-50%, -4px);
}
[data-title][data-flow="bottom"]::before {
  top: 100%;
  border-top-width: 0;
  border-bottom-color: #4621FF;
}
[data-title][data-flow="bottom"]::after {
  top: calc(100% + 5px);
}
[data-title][data-flow="bottom"]::before, [data-title][data-flow="bottom"]::after {
  left: 50%;
  -webkit-transform: translate(-50%, 8px);
          transform: translate(-50%, 8px);
}
[data-title][data-flow="left"]::before {
  top: 50%;
  border-right-width: 0;
  border-left-color: #4621FF;
  left: calc(0em - 5px);
  -webkit-transform: translate(-8px, -50%);
          transform: translate(-8px, -50%);
}
[data-title][data-flow="left"]::after {
  top: 50%;
  right: calc(100% + 5px);
  -webkit-transform: translate(-8px, -50%);
          transform: translate(-8px, -50%);
}
[data-title][data-flow="right"]::before {
  top: 50%;
  border-left-width: 0;
  border-right-color: #4621FF;
  right: calc(0em - 5px);
  -webkit-transform: translate(8px, -50%);
          transform: translate(8px, -50%);
}
[data-title][data-flow="right"]::after {
  top: 50%;
  left: calc(100% + 5px);
  -webkit-transform: translate(8px, -50%);
          transform: translate(8px, -50%);
} */
/* [data-title=""]::after, [data-title=""]::before {
  display: none;
}  */

 /*  [data-title] {
    position: relative;  
}

[data-title]::after {
content: attr(data-title);
background-color: #000000;
color: var(--primary-color);
font-size: 150%;
position: absolute;
width: 140px;
text-align: center;
border-radius: 10px;
padding: 1px 5px 2px;
bottom: -1.6em;
left: 100%;
white-space: nowrap;
box-shadow: 1px 1px 3px #222222;
opacity: 0;
border: 1px solid #111111;
z-index: 99999;
visibility: hidden;
}

[data-title]:hover::after {
opacity: 1;
transition: all ease-in-out 0.5s;
visibility: visible;

} 
 */

`;