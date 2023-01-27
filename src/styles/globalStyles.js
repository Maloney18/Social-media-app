import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    line-height: 1.6;
    scroll-padding-top: 2rem;


}


html, body, #root, .App {
    height: 100%;
}

body {
    line-height: 1.5;
    -webkit-font-smoothing: antialised;
}

:root {
--primary-color: #ffff;
/* --primary-color: #000000; */
--color-gray: #cccccc;
--color-gray-lyt: #eeeeee;
--aliceblue: #eff4ff;
--color-gray-dark: #181818;
--color-white: #ffffff;
--gray-and-black: linear-gradient( to top left, #181818,#cccccc, #000000 );
--default-font: 'Inter', sans-serif;
/* --default-font: 'Space Grotesk', sans-serif; */
--transition: all .5s ease-in-out;
--default-font-size: 1rem;
}

body{
font-family: var(--default-font);
background: var(--color-gray-lyt);
font-size:var(--default-font-size);
/* @media screen and (min-width: 45rem) {
}  
    @media screen and (min-width: 64rem) {
    } */
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

.open{
    pointer-events: all !important;
opacity:1 !important;

}

.hamburger{
    &::after{
width: 0 !important;
transition: var(--transition);


}

:before{

    transform: rotate(-50deg);
transition: var(--transition);
width: 65% !important;
transform-origin: top;
top: 15px !important;
}

 div{
transform: rotate(50deg);
transition: var(--transition);

}
}

.next_page{
    padding-bottom: 2rem;
    button{
    text-transform: capitalize;
    width: max-content;
    border-radius: 2rem !important;
    padding: 0.9rem 1rem !important;
    /* font-size: .7rem !important; */
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
    /* width: 548px; */
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
    /* font-weight: 500; */
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

p{
    /* font-weight: 500; */

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

/* .animate{
    position: relative;
animation: slideUp 1s ease-in-out forwards ;
    @keyframes slideUp {
        0%{
           opacity :0 ;
           top:200px ;
        }
        60%{
           opacity :.2 ;
        }
        80%{
           opacity :.5 ;
        }
        100%{
           opacity :1 ;
           top:20px ;
        }
        
    }
    
} */
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  width: 100%;
  align-items: start;
  place-items: center;
  @media screen and (min-width: 45rem) {
      place-items:start;
  }
}

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
    /* width: 548px; */
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
width: 110px;
margin-right: auto;
margin-left: 0;
@media screen and (min-width: 45rem) {
    margin-left: -53px;
    width: 127px;
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
`;