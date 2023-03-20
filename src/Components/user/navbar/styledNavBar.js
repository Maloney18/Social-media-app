import styled, { css, keyframes } from "styled-components";


export const StyledNavBar = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 4.4rem;
position: fixed;
top: 0;
transition: all 0.5s ease-in-out;
font-family: inherit;
z-index: 999;
background-color: var(--primary-color);
padding: 0.7rem;
color: var(--color-gray-dark);

`;


export const NavCont = styled.nav`
  display: flex;
  width: 100%;
background: var(--primary-color);
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1rem;

  ${({ style2 }) =>
    style2 &&
    css`
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 0.9rem;
      padding: 0.7rem 1.7rem;

      @media screen and (min-width: 45rem) {
        text-align: left;
        padding: 0;
      }
    `}

  .search-area {
    display: flex;
    margin-right: auto;
    width: fit-content ;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;


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

    @media screen and (min-width: 64rem) {
      width: 100%;
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

      @media screen and (min-width: 64rem) {
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
      @media screen and (min-width: 64rem) {
        width: 100%;
        padding: 0.8rem 0.5rem 0.8rem 1rem;
      }
    }
  }
    

`;


export const LinkCont = styled.ul`
  width: fit-content;
  opacity: 1;
  display: flex;
  flex-direction: row-reverse;
  padding: 0;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 1.2rem;
  pointer-events: all;
  position: relative;
  margin-left: auto;
  
  @media screen and (min-width: 45rem) {
    flex-direction: row;
    gap: 2rem;
  }
  
  /* @media screen and (max-width: 884px) {
    flex-direction: row-reverse;
  } */
  

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

  
  
  &:not(:first-of-type, :nth-of-type(4), :nth-of-type(5), :last-of-type){
    @media screen and (max-width: 912px) {
      display: none;
    }
    
  }

  &:last-of-type {
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    
    .cover{
      border-radius: 50%;
      overflow: hidden;
    }
    
  }
  &:nth-of-type(1) {
    border-radius: 10%;
    display: flex;
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

    @media screen and (max-width: 280px) {
      display: none;
    }

  }

  @media screen and (min-width: 45rem) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
  }


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
    transition: all 1s ease-in-out;

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
    background-color: var(--color-gray-dark);
    height: 2px;
    width: 65%;
    border-radius: 2rem 0 0 2rem;
    padding: 0.1rem;
    transition: width .5s ease-in-out;
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

