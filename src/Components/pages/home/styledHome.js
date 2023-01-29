import styled from "styled-components";

export const StyledHome = styled.div`
.grid{
    .wrapper{
        width: 100%;
        height: fit-content;

        &:nth-of-type(2){
            grid-column: span 2;

            .item{
                width: 100%;
                grid-column: span 2;
                
                .inner-wrapper{
                    display: flex;
                    width: 100%;

                    gap: 1rem;
                            overflow-y: hidden;
                            overflow-x: auto;

                        }
                &:nth-of-type(1){
                    position: relative;
                    .profile{

                        width: fit-content;

                        &:nth-of-type(1){
            position: relative;
                            .img_wrapper{
                                border: 1px solid var(--color-gray);
                            }
                        }
                        .img_wrapper{
                            margin: 0 auto;

                            width: 70px;
                            height: 70px;
                            border-radius: 50%;
                            overflow: hidden;
                            border: 2px solid var(--blueViolet);
                            img{
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                                object-fit: cover;
                                border: 2px solid var(--color-white);
                                object-position: center;
                            }
                        }

                        .text{
                            p{
                                font-size:.8rem;
                                width: 100%;
                            }
                        }
                    }

                }

            }


        }
        .item{
    padding: 1rem;
        width: 100%;
        border-radius: 1rem;
        background:var(--color-white);

}
    }
}
`;