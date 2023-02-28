import styled from "styled-components";

export const StyledHome = styled.div`
  .grid {
    .wrapper {
      width: 100%;
      height: fit-content;
      padding-top: 6rem;
      
      @media screen and (min-width: 45rem) {
        padding-top: 4rem;
        
      }
      &:nth-of-type(2) {
        /* grid-column: span 2; */
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
          
          
          .inner-wrapper {
            display: flex;
            margin: 0 auto;  
            max-width: 100%;
            &::-webkit-scrollbar {
              width: 0;
              height: 0;
              background: var(--color-white);
            }

            gap: 1rem;
            overflow-y: hidden;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-snap-align: center;
            
            
          }
          &:nth-of-type(1) {
            position: relative;
            
            .profile {
              width: fit-content;
              transition: 1s ease;


              &:nth-of-type(1) {
                position: relative;
                .img_wrapper {
                  border: 1px solid var(--color-gray);
                }
              }
              .img_wrapper {
                margin: 0 auto;

                width: 70px;
                height: 70px;
                border-radius: 50%;
                overflow: hidden;
                border: 2px solid var(--blueViolet);
                cursor: pointer;


                &:hover{
                  img{
                    transform: scale(1.1);
                    transition: var(--transition);
                  }
                }

                img {
                  width: 100%;
                  /* height: 100%; */
                  aspect-ratio: 1/1;
                  border-radius: 50%;
                  object-fit: cover;
                  border: 2px solid var(--color-white);
                  object-position: center;
                }
              }

              .text {
                p {
                  font-size: 0.8rem;
                  width: 100%;
                }
              }
            }
          }
          &:nth-of-type(2){
            .profile {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: .5rem;
              padding-bottom: 2rem;

              .combine{
                width: 100%;
                display: flex;
                align-items: center;
                gap: 2rem;
                /* padding-bottom: 2rem; */

              }

              .img_wrapper {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                overflow: hidden;

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
        font-size: 1rem;
      }
}

            }
     .actions_cont{
      display: flex;
      align-items: center;

      width: 100%;
      justify-content: space-between;

      .icons_cont{
        width: fit-content;
        display: flex;
        align-items: center;

        gap: 1rem;

        .icon_wrapper{
          width: max-content;
          display: flex;
          align-items: center;

          gap: 1rem;

          .icon{
            font-size: 1.3rem;
          }
          .desc{
            font-size: 1rem;
        text-transform: capitalize;


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
        border: none;
        cursor: pointer;
        font-size: 1rem;
      }

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
      }
    }

    .engagements {
      .items_wrapper {
        display: flex;
        gap: 1rem;
        width: fit-content;
        padding-bottom: 1rem;

        /* align-items: center; */
        /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */

        .img_cont {
          /* background-color: pink; */

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
              /* border: 2px solid var(--color-white); */
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

        /* .img-wrapper:nth-of-type(4){
    transform: translateX(200%);
    } */

        .text_cont {
          margin-left: 5rem;
        }
      }
    }
  }
`;
