import styled from "styled-components";

export const Header = styled.header`
width: 100%;
  align-items: center;
  position: relative;
  display: none;
  justify-content: center;

    @media screen and (min-width: 64rem) {
      display: flex;
      margin-right: 2rem;
      transition: var(--transition);
    p {
      font-size: 1.3rem;
    }

    }

    .brand-name {
      width: max-content;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      cursor: pointer;
      p {
        font-size: 1.8rem;
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
    }
  
  

  @media screen and (min-width: 45rem) {
    padding: 0.7rem 0 .7rem 4rem ;
  }


  
`;