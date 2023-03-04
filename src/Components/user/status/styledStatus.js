import styled from "styled-components";

export const StyledStatus = styled.div`

      display: flex;
      flex-direction: row;
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




`;