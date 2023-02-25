import styled, { css, keyframes } from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 4.4rem;
  align-items: center;
  display: flex;
  padding: 0.7rem;
  justify-content: center;
  background-color: var(--primary-color);
  color: var(--color-gray-dark);
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out;
  z-index: 999;
  font-family: inherit;

    @media screen and (min-width: 45rem) {
      margin-right: 2rem;
      transition: var(--transition);
    p {
      font-size: 1.3rem;
    }

    }
  

  @media screen and (min-width: 45rem) {
    padding: 0.7rem 4.4rem;
  }
`;

export const MobileNavCont = styled(Header)`

  @media screen and (min-width: 45rem) {
    display: none;
  }
    .zoom-in {
      transform: scale(0);
      width: 0;
    }
  
  
  .brand-name {
    margin-right: 0;
    transition: var(--transition);
    p {
      font-size: 1.3rem;
    }
  }
  




    @media screen and (min-width: 45rem) {
      margin-right: 2rem;
      transition: var(--transition);
    p {
      font-size: 1.3rem;
    }

    }
  

  @media screen and (min-width: 45rem) {
    padding: 0.7rem 4.4rem;
  }
`;
export const NavCont = styled.nav`
  display: flex;
  width: 100%;
  /* position: relative; */
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1rem;

  ${({ style2 }) =>
    style2 &&
    css`
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 0.9rem;
      /* margin: 0 1rem; */
      padding: 0.7rem 1.7rem;

      @media screen and (min-width: 45rem) {
        /* margin: 0 4.5rem; */
        /* margin-right: -.2rem; */
        text-align: left;
        padding: 0;
      }
    `}

  .search-area {
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

    ${({ navTwo }) => navTwo && css`
    padding-right: .5rem;
    
      .slideOpen {
        width: 100%;
        padding: 0.8rem 0.5rem 0.8rem .5rem;
      }
      .change {
        border-radius: 1.5rem 0 0 1.5rem;
      }

    
    `}


    @media screen and (min-width: 45rem) {
      width: 600px;
      margin: 0 1rem 0 auto;
    }

    button {
      padding: 0.656rem;
      border: none;
      height: 78%;
      border-radius: 50%;
      background-color: var(--color-gray-lyt);

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      text-align: center;

      > * {
        margin: 0 auto;
      }

      @media screen and (min-width: 45rem) {
        border-radius: 1.5rem 0 0 1.5rem;
      }

      .icon {
        font-size: 1.5rem;
      }
    }
    input {
      padding: 0;
      border-radius: 0 1.5rem 1.5rem 0;
      background-color: var(--color-gray-lyt);
      border: none;
      outline: none;
      width: 0;
      transition: var(--transition);

      height: 90%;
      font-size: 1rem;

      &::placeholder {
        font-size: 1rem;
      }
      @media screen and (min-width: 45rem) {
        width: 100%;
        padding: 0.8rem 0.5rem 0.8rem 1rem;
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
  opacity: 1;
  height: unset;
  display: flex;
  flex-direction: row-reverse;
  /* flex-wrap: wrap; */
  padding: 0;
  /* margin-left: .5rem; */
  align-items: flex-end;
  /* flex-direction: row; */
  justify-content: flex-end;
  gap: 1rem;
  pointer-events: all;
  position: relative;
  margin-left: auto;
  
  @media screen and (min-width: 45rem) {
    flex-direction: row;
    gap: 2rem;
  }
  
  @media screen and (max-width: 884px) {
    flex-direction: row-reverse;
  }
  
  /* }   */

  /* ${({ noGap }) =>
    noGap &&
    css`
      margin-right: 0;
      @media screen and (min-width: 64rem) {
        margin-right: 2rem;
      }
    `} */

  a {
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

    &::before {
      content: "";
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
  position: relative;

  
  &:not( :first-of-type ,:last-of-type):hover{
    background: var(--blueViolet);
    .icon{
      color: var(--primary-color);
    }
    transition: var(--transition);

  }

  span{
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.8rem;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-align: center;
font-weight: bolder;
border: 1px solid var(--blueViolet);
    top: 0;
    right: -10%;
    background: var(--color-gray);
    /* text-shadow: 3px 5px 5px var(--color-gray-dark); */
    color: var(--blueViolet);
  }


  ${({ hide }) =>
    hide &&
    css`
      display: none;
      @media screen and (min-width: 64rem) {
        display: flex;
      }
    `}

  & > * {
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .icon {
    font-size: 1.5rem;
  }

  &:not(:first-of-type, :nth-of-type(4), :nth-of-type(5)){
    @media screen and (max-width: 884px) {
      display: none;
    }

  }

  &:last-of-type {

    .cover{
      border-radius: 50%;
    }



    width: 3rem;
    height: 3rem;
  }
  &:nth-of-type(1) {
    border-radius: 10%;
    display: flex;
    /* margin-left: 5rem; */
    @media screen and (min-width: 45rem) {
      margin-left: unset;
    }
  }

  &:nth-of-type(4) {
    display: flex;
        @media screen and (max-width: 360px) {
      display: none;
    }

    .icon{
      color: var(--blueViolet);
    }
  }
  &:nth-of-type(5) {
    display: flex;

        /* @media screen and (max-width: 360px) {
      display: none;
    } */

  }

  @media screen and (min-width: 45rem) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
  }

  /* &:hover{
    a::before{
        width: 100%;
        left: 0;
    }

} */

/*.tooltip {
    border-bottom: 1px dotted #333;
    position: relative;
    cursor: pointer;

    &:hover[data-tooltip]::after {
      content: attr(data-tooltip);
      position: absolute;
      white-space: nowrap;
      background: rgba(0, 0, 0, 0.85);
      padding: 3px 7px;
      color: #fff;
      border-radius: 3px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      margin-left: 7px;
      margin-top: -3px;
    }

  } */

  
  /* [title] {
    position: relative;  
}

[title]::after {
content: attr(title);
background-color: #00FF00;
color: #111;
font-size: 150%;
top: 0;
left: 0;
right: 0;
bottom: 0;
position: absolute;
padding: 1px 5px 2px;
bottom: -1.6em;
left: 100%;
white-space: nowrap;
border-radius: 3px;
box-shadow: 1px 1px 3px #222222;
opacity: 0;
border: 1px solid #111111;
z-index: 99999;
visibility: hidden;
}

[title]:hover::after {
opacity: 1;
transition: all 0.1s ease 0.5s;
visibility: visible;

} */

/* [data-tooltip] {
  position: relative;
  cursor: pointer;
}
[data-tooltip]::before,
[data-tooltip]::after {
  line-height: 1;
  font-size: .9em;
  pointer-events: none;
  position: absolute;
  box-sizing: border-box;
  display: none;
  opacity: 0;
}
[data-tooltip]::before {
  content: "";
  border: 5px solid transparent;
  z-index: 100;
}
[data-tooltip]::after {
  content: attr(data-tooltip);
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
[data-tooltip]:hover::before,
[data-tooltip]:hover::after {
  display: block !important;
  opacity: 1;
}
[data-tooltip]:not([data-flow])::before,
[data-tooltip][data-flow="top"]::before {
  bottom: 100%;
  border-bottom-width: 0;
  border-top-color: #4621FF;
}
[data-tooltip]:not([data-flow])::after,
[data-tooltip][data-flow="top"]::after {
  bottom: calc(100% + 5px);
}
[data-tooltip]:not([data-flow])::before, [tooltip]:not([data-flow])::after,
[data-tooltip][data-flow="top"]::before,
[data-tooltip][data-flow="top"]::after {
  left: 50%;
  -webkit-transform: translate(-50%, -4px);
          transform: translate(-50%, -4px);
}
[data-tooltip][data-flow="bottom"]::before {
  top: 100%;
  border-top-width: 0;
  border-bottom-color: #4621FF;
}
[data-tooltip][data-flow="bottom"]::after {
  top: calc(100% + 5px);
}
[data-tooltip][data-flow="bottom"]::before, [data-tooltip][data-flow="bottom"]::after {
  left: 50%;
  -webkit-transform: translate(-50%, 8px);
          transform: translate(-50%, 8px);
}
[data-tooltip][data-flow="left"]::before {
  top: 50%;
  border-right-width: 0;
  border-left-color: #4621FF;
  left: calc(0em - 5px);
  -webkit-transform: translate(-8px, -50%);
          transform: translate(-8px, -50%);
}
[data-tooltip][data-flow="left"]::after {
  top: 50%;
  right: calc(100% + 5px);
  -webkit-transform: translate(-8px, -50%);
          transform: translate(-8px, -50%);
}
[data-tooltip][data-flow="right"]::before {
  top: 50%;
  border-left-width: 0;
  border-right-color: #4621FF;
  right: calc(0em - 5px);
  -webkit-transform: translate(8px, -50%);
          transform: translate(8px, -50%);
}
[data-tooltip][data-flow="right"]::after {
  top: 50%;
  left: calc(100% + 5px);
  -webkit-transform: translate(8px, -50%);
          transform: translate(8px, -50%);
}
[data-tooltip=""]::after, [data-tooltip=""]::before {
  display: none !important;
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
  }
  &::before {
    width: 30%;
    padding: 0.1rem;
    top: 20%;
  }
  &::after {
    bottom: 20%;
    width: 65%;
    padding: 0.12rem;
    background: var(--blueViolet);
  }
  div {
    width: 100%;
    background-color: var(--color-gray-dark);
    height: 2px;
    width: 65%;
    border-radius: 2rem 0 0 2rem;
    padding: 0.1rem;
    transition: var(--transition);
  }

  &:hover {
    ::before {
      animation: ${slideIn} 0.5s 0.3s ease-in-out forwards;
    }
    ::after {
      animation: ${slideIn} 0.5s 0.7s ease-in-out forwards;
    }
    div {
      animation: ${slideIn} 0.5s 0.5s ease-in-out forwards;
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
