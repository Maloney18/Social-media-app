import styled from "styled-components";

export const StyledLdnPage = styled.div`

display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 6rem 1rem 0;

@media screen and (min-width: 64rem) {
    padding: 4rem 4.6rem 0;
height: unset;
}  


.main__heading{
    width: 100%;
  max-width: 70rem;


@media screen and (min-width: 64rem) {
    gap: 2rem;
}
    .heading__text{
        text-align: center;
padding: 0rem 1rem;
        @media screen and (min-width: 64rem) {
            padding: 0;
            text-align: unset;

}

        h1{
            text-align: center;
            width: 100%;
            font-size: 2.5rem;
            letter-spacing: 0.99px;
            word-wrap: normal;
            line-height: 45px;
            @media screen and (min-width: 64rem) {
                font-size: 4.4rem;
                line-height: unset;

            }
    
        }
        p{
            word-wrap: normal;
            width: 100%;
            margin-top: 2rem;
            padding-bottom: 2rem;
            font-size: 1rem;
            line-height: 33.75px;

            @media screen and (min-width: 64rem) {
                margin-top: 0;
                padding-bottom: 0;
                font-size: 1.13rem;


            }

        }

    }
    .btn__cont{
        width: 100%;
        gap: 2.5rem;
        padding: 0rem ;
        width: 100%;
        
        @media screen and (min-width: 64rem) {
            gap: 22.5rem;
            padding: 0rem 10rem;
}  



        .icon{
            margin-right: 5px;
        }
    }
}
`;