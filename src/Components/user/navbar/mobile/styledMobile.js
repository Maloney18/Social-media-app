import styled from "styled-components";


export const MobileNavCont = styled.div`
width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;


  @media screen and (min-width: 64rem) {
    display: none;
      padding: 0.7rem 4.4rem;
      transition: var(--transition);
    p {
      font-size: 1.3rem;
    }

  }
    .zoom-in {
      transform: scale(0);
      width: 0;
    }
  
  
  .brand-name {
      width: max-content;
      height: 100%;
      display: inline-flex;
      align-items: center;
      background: var(--primary-color);
      gap: 0.3rem;
      p {
        font-size: 1.3rem;
        white-space: nowrap;
        font-family: "Berkshire Swash", cursive;
        width: 100%;


      }
      span{
        .icon{
          font-size: 1.8rem;
margin-top: .5rem;
          color: var(--blueViolet);
        }
      }
    transition: var(--transition);
  }  

`;