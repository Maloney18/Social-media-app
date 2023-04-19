import styled from "styled-components";

export const StyledProfile = styled.div`

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
                background: var(--primary-color);
                border: 2px solid var(--blueViolet);
                cursor: default;


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
                  font-weight: bold;
                  /* color: var(--blueViolet); */
                  /* text-shadow: 2px 2px 3px var(--primary-color); */
                }
              }
`;