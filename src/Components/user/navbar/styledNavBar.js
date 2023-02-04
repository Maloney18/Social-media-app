import styled, { css, keyframes } from "styled-components";



export const Header = styled.header`
width: 100%;
height: 4.4rem;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--primary-color);
color: var(--color-gray-dark);
position: fixed;
top: 0;
z-index: 99;
font-family: inherit;

.brand-name{
    margin-right: 2rem;
    p{
        font-size: 1.3rem;
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
    max-width: 100%;
    width: 600px;
    align-items: center;
    justify-content: center;
    margin: 0 1rem 0 auto;
    overflow: hidden;
    

    button{
        padding: .656rem;
        border: none;
        height: 78%;
        border-radius: 1.5rem 0 0 1.5rem;
        background-color: var(--color-gray-lyt);
        /* font-size: 1.5rem; */
            /* margin-top: .5rem; */

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-align: center;

.icon{
    font-size: 1.5rem;

}

    }
    input{
        padding: 0.8rem .5rem 0.8rem 1rem;
        border-radius: 0 1.5rem 1.5rem 0;
        background-color: var(--color-gray-lyt);
        border: none;
        outline: none;
        width: 100%;
        height: 90%;
        font-size: 1rem;
    
        &::placeholder{
            font-size: 1rem;
        }
    }

}

`;
export const LinkCont = styled.ul`
position: absolute;
left: 0;
right:0;
bottom:0;
background:var(--primary-color);
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

 

 @media screen and (min-width: 64rem) {
     width: 30%;
     opacity:1;
     height: unset;
     padding: 0;
     display: flex;
     align-items: flex-end;
     flex-direction: row;
     justify-content: flex-end;
     gap: 2rem;
     pointer-events: all;
     position: relative;
     margin-left: auto;

    }  
    
    /* @media screen and (min-width: 64rem) {
        align-items: center;
        justify-content: center;

    } */
    
    
    ${({ noGap }) => noGap && css`
    margin-right: 0;
    @media screen and (min-width: 64rem) {
        margin-right: 2rem;

    }
    
`}

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
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
position: relative;
width: 2.5rem;
height: 2.5rem;
border-radius: 50%;
background-color: var(--color-gray-lyt);
overflow: hidden;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.icon{
    font-size: 1.2rem;

}

&:nth-of-type(3){
    width: 3rem;
height: 3rem;
   
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
    right: 0;
}
`;
export const MenuBar = styled.div`
display: flex;
margin-left: auto;
align-items: center;
justify-content: flex-end;
position: absolute;
cursor: pointer;
overflow: hidden;
top: 15%;
right: 5%;
width: 2.1rem;
height: 2.1rem;

&::before,::after{
    content: '';
    position: absolute;
    background-color: var(--color-white);
    height: 2px;
    /* transition: var(--transition); */


}
&::before{
    width: 35%;
    top: 20%;


}
&::after{
bottom: 20%;
width: 45%;


}
div{
    width:100% ;
    background-color: var(--color-white);
    height: 2px;
    width: 65%;
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
    display: none;
}


`;
export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;

`;