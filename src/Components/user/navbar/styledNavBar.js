import styled, { css, keyframes } from "styled-components";



export const Header = styled.header`
width: 100%;
height: 4.4rem;
display: flex;
align-items: center;
padding: .7rem;
justify-content: center;
background-color: var(--primary-color);
color: var(--color-gray-dark);
position: fixed;
top: 0;
transition: all .5s ease-in-out;
z-index: 99;
font-family: inherit;

&:hover  {

    .brand-name{
        transform: scale(0);
        width: 0;

    }
}


@media screen and (min-width: 45rem) {
    &:hover  {
        .brand-name{
        transform: unset;
        width: unset;

    }

    }
}

.brand-name{
    margin-right: 0;
    transition: var(--transition);
    p{
        font-size: 1.3rem;
    }

    @media screen and (min-width: 45rem) {
        margin-right: 2rem;

    }
}

@media screen and (min-width: 45rem) {
    padding: .7rem 4.4rem;

}

`;
export const NavCont = styled.nav`
display: flex;
width: 100%;
/* position: relative; */
align-items: center;
justify-content: center;
padding: .7rem 1.7rem;


${({ style2 }) => style2 && css`

font-family: 'Montserrat', sans-serif;
font-weight: 500;
font-size: 0.9rem;
/* margin: 0 1rem; */
padding: .7rem 1.7rem;


@media screen and (min-width: 45rem) {
    /* margin: 0 4.5rem; */
    /* margin-right: -.2rem; */
    text-align: left;
    padding: 0;

}

`}

.search-area{
    display: flex;
    /* max-width: 100%; */
    margin-right: auto;
    width: fit-content;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;

    /* >*{
        align-self: center;
    justify-self: flex-start;
  
    } */
    &:hover{
        /* width: 100%; */
        @media screen and (min-width: 45rem) {
            width: fit-content;

        }

            input{
                width: 100%;
                padding: 0.8rem .5rem 0.8rem 1rem;

            }
            button{
            border-radius: 1.5rem 0 0 1.5rem;
 
        }


        }

    @media screen and (min-width: 45rem) {
        width: 600px;
        margin: 0 1rem 0 auto;

}

    button{
        padding: .656rem;
        border: none;
        height: 78%;
        border-radius: 50%;
        background-color: var(--color-gray-lyt);
        /* font-size: 1.5rem; */
            /* margin-top: .5rem; */

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-align: center;

        >*{
            margin: 0 auto;
        }

        @media screen and (min-width: 45rem) {
            border-radius: 1.5rem 0 0 1.5rem;

        }

.icon{
    font-size: 1.5rem;

}

    }
    input{
        padding: 0;
        border-radius: 0 1.5rem 1.5rem 0;
        background-color: var(--color-gray-lyt);
        border: none;
        outline: none;
        width: 0;
        transition: var(--transition);

        height: 90%;
        font-size: 1rem;
    
        &::placeholder{
            font-size: 1rem;
        }
        @media screen and (min-width: 45rem) {
            width: 100%;
        padding: 0.8rem .5rem 0.8rem 1rem;



        }

    }

}

`;
export const LinkCont = styled.ul`
/* position: absolute;
left: 0;
right:0;
bottom:0;
background:var(--primary-color);
/* background:pink; 
top:100%;
width: 100%;
height: 100vh;
display: flex;
opacity:0;
gap: 1rem;
padding: 1.5rem 2rem 0;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
pointer-events: none;
transition: var(--transition);

  */

 /* @media screen and (min-width: 64rem) { */
 width: fit-content;
     opacity:1;
     height: unset;
     padding: 0;
     /* margin-left: .5rem; */
     display: flex;
     align-items: flex-end;
     flex-direction: row;
     justify-content: flex-end;
     gap: 2rem;
     pointer-events: all;
     position: relative;
     margin-left: auto;
     @media screen and (min-width: 64rem) {
 
     }

    /* }   */
    
    
    
    /* ${({ noGap }) => noGap && css`
    margin-right: 0;
    @media screen and (min-width: 64rem) {
        margin-right: 2rem;

    }
    
`} */

a{
    text-decoration: none;
color: inherit;
text-transform: capitalize;
display: block;
color: inherit;
font-weight: inherit;
font-size: 1.1rem;
text-align: inherit;
font-family: inherit;
cursor: pointer;
white-space: nowrap;
position: relative;
font-weight: 500;

@media screen and (min-width: 45rem) {
    font-size: inherit;
 
}

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

}

`;

export const LinkWrapper = styled.li`
list-style: none;
align-items: center;
justify-content: center;
cursor: pointer;
position: relative;
width: 2.5rem;
height: 2.5rem;
border-radius: 50%;
background-color: var(--color-gray-lyt);
overflow: hidden;

${({ hide }) => hide && css`
display: none;
    @media screen and (min-width: 64rem) {
display: flex;
    }
    
`}


 & > *{
        margin: 0 auto;
    }


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.icon{
    font-size: 1.2rem;

}

&:last-of-type{
    width: 3rem;
height: 3rem;
   
}
&:nth-of-type(1){
    border-radius: 10%;
    display: flex;
/* margin-left: 5rem; */
@media screen and (min-width: 45rem) {
    margin-left: unset;
}
   
}


@media screen and (min-width: 45rem) {
    display: flex;
align-items: center;
justify-content: center;
font-size: .6rem;

}

/* &:hover{
    a::before{
        width: 100%;
        left: 0;
    }

} */

`;
const slideIn = keyframes`
0%{
    right: 0;
}
50%{
    left: 200%;
width: 0;
}
80%{
    left: 0;
}
100%{
    right:20%;
}
`;
export const MenuBar = styled.div`
display: flex;
margin: 0 auto;
align-items: center;
justify-content: flex-end;
padding-right: .5rem;
/* position: absolute; */
cursor: pointer;
overflow: hidden;
/* top: 15%;
right: 5%; */
width: 100%;
height: 100%;

&::before,::after{
    content: '';
    border-radius: 2rem 0 0 2rem;
    position: absolute;
    background-color: var(--color-gray-dark);
    height: 2px;
    /* transition: var(--transition); */


}
&::before{
    width: 30%;
    padding: .10rem;

    top: 20%;


}
&::after{
bottom: 20%;
width: 65%;
padding: .12rem;

background: var(--blueViolet);
/* height: 3px; */




}
div{
    width:100% ;
    background-color: var(--color-gray-dark);
    height: 2px;
    width: 65%;
    border-radius: 2rem 0 0 2rem;
    padding: .10rem;


    transition: var(--transition);


}
&:hover{
    ::before{
  animation: ${slideIn} .5s .3s ease-in-out forwards ;
  

    }
    ::after{
  animation: ${slideIn} .5s .7s ease-in-out forwards ;

    }
    div{
  animation: ${slideIn} .5s .5s ease-in-out forwards ;
  position: absolute;

    }
}
@media screen and (min-width: 64rem) {
    display: flex;
}


`;
export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;

`;