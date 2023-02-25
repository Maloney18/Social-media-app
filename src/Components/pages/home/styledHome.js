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
            width: 100%;
            &::-webkit-scrollbar {
              width: 0;
              height: 0;
              background: var(--color-white);
            }

            gap: 1rem;
            overflow-y: hidden;
            overflow-x: auto;
          }
          &:nth-of-type(1) {
            position: relative;

            .profile {
              width: fit-content;

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
                img {
                  width: 100%;
                  height: 100%;
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
          &:nth-of-type(2) {
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
                border-radius: 50%;
                overflow: hidden;
                /* border: 2px solid var(--blueViolet); */
                img {
                  width: 100%;
                  height: 100%;
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
          background-color: pink;

          display: flex;
          width: max-content;
          align-items: center;
          position: relative;
          .img-wrapper {
            width: 40px;
            height: 40px;
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
