import styled from "styled-components";

export const StyledHome = styled.div`
  .grid {

    & > .item{
      container-type: inline-size;
    }
    .wrapper {
      width: 100%;
      height: fit-content;
      padding-top: 6rem;
      
      @media screen and (min-width: 45rem) {
        padding-top: 4rem;
        
      }
      &:nth-of-type(2) {
        grid-area: 1;

        @media screen and (min-width: 45rem) {
          grid-area: unset;
          grid-column: span 2;
          
        }
        @media screen and (max-width: 884px) {
      grid-area: 1;
    }

        .item {
          width: 100%;
          grid-column: span 2;

          &:nth-of-type(1) {
            position: relative;

          }
          &:nth-of-type(2){

              .combine{
                width: 100%;
                display: flex;
                align-items: center;
                gap: 2rem;

              }

              .img_wrapper {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                overflow: hidden;

                img {
                  width: 100%;
                  aspect-ratio: 1/1;
                  border-radius: 50%;
                  object-fit: cover;
                  object-position: center;
                }
              }
.input_cont{
  width: 100%;

  input{
    width: 100%;
    background-color: var(--color-gray-lyt);
      border: 1px inset var(--blueViolet);
      outline: none;
      transition: var(--transition);
      font-size: 1rem;
      border-radius: 2rem;
      padding: 0.5rem 0.5rem 0.5rem 1rem;

      &::placeholder {
        font-size: 5cqw;
            
            @media screen and (min-width: 64rem) {
          font-size: 3cqw;



          }        
      }
}

            }
     .actions_cont{
      display: flex;
      align-items: center;

      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.7rem;

      .icons_cont{
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 1rem;
        @media screen and (max-width: 280px) {
          flex-wrap: wrap;   
 }

        .icon_wrapper{
          width: 100%;
          display: flex;
          align-items: center;
          gap: .5rem;


          .icon{
            font-size: 1.3rem;
          }
          .desc{
            text-transform: capitalize;
          font-size: 5cqw;
            
            @media screen and (min-width: 64rem) {
          font-size: 3cqw;



          }
        }
  
        }
      }

      button{
        width: max-content;
        padding: .5rem 1rem;
        white-space: nowrap;
        background: var(--blueViolet);
        border-radius: 1rem;
        text-transform: capitalize;
        color: var(--color-white);
        margin-left: auto;
        border: none;
        cursor: pointer;
        font-size: 1rem;
      }

     }       
        }
          &:nth-of-type(3) {
            position: relative;

            .profile {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-bottom: 2rem;

              /* &:nth-of-type(1){
            position: relative;
                            .img_wrapper{
                                border: 1px solid var(--color-gray);
                            }
                        } */
              .img_wrapper {
                width: 70px;
                height: 70px;
                cursor: pointer;

                border-radius: 50%;
                overflow: hidden;

                &:hover{
                  img{
                    transform: scale(1.1);
                    transition: var(--transition);

                  }
                }
                /* border: 2px solid var(--blueViolet); */
                img {
                  width: 100%;
                  /* height: 100%; */
                  aspect-ratio: 1/1;


                  border-radius: 50%;
                  object-fit: cover;
                  /* border: 2px solid var(--color-white); */
                  object-position: center;
                }
              }

              .text {
                display: flex;
                flex-direction: column;
                margin-right: auto;
                p {
                  width: 100%;
                  font-weight: bold;
                  opacity: 0.6;
                  text-transform: capitalize;
                  font-size: 0.8rem;
                  &:nth-of-type(1) {
                    opacity: 1;

                    text-transform: unset;

                    font-size: 1rem;
                  }
                }
              }
            }
          }
        }
      }
      .item {
        padding: 1rem;
        width: 100%;
        border-radius: 1rem;
        background: var(--color-white);
        .icon {
          cursor: pointer;
          font-size: 1.4rem;
        }
      }
    }
  }

  .post {
    width: 100%;
    .img-wrapper {
      width: 100%;
      height: max-content;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* border: 2px solid var(--color-white); */
        object-position: center;
      }
    }

    .icons_wrapper {
      display: flex;
      padding-bottom: 1rem;
      align-items: center;
      justify-content: space-between;

      .left-icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: fit-content;
        gap: 2rem;

        &{
          .icon:nth-of-type(1){
          color: var(--blueViolet);
          font-size: 1.5rem;

          }
        }
      }
    }

    .engagements {
      .items_wrapper {
        display: flex;
        gap: 1rem;
        width: fit-content;
        padding-bottom: 1rem;

        .img_cont {
          display: flex;
          width: max-content;
          align-items: center;
          position: relative;

          .img-wrapper {
            width: 40px;
            height: 40px;
            cursor: pointer;
            position: absolute;
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid var(--color-white);

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
            }
          }

          .img-wrapper:nth-of-type(1) {
            transform: translateX(0%);
          }

          .img-wrapper:nth-of-type(2) {
            transform: translateX(50%);
          }

          .img-wrapper:nth-of-type(3) {
            transform: translateX(110%);
          }
        }


        .text_cont {
          margin-left: 5rem;
        }
      }
    }
  }
`;
