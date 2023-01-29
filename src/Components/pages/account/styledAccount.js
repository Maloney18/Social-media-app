import styled from "styled-components";

export const StyledAccount = styled.div`
font-family: 'Montserrat', sans-serif;
width: 100%;

section{
    padding: 0 !important;
}

.text_cont{
        padding: 4.24rem 2rem 0;
        h1{
            font-size: 3rem;
            line-height: 2.9rem;
font-weight: 800;
text-align: center;
text-transform: capitalize;
}
p{
    margin-top: 2rem;
            text-align: center;
            font-size: 1rem;

        }
    }

.account_wrapper{
   color: var(--color-white);
   background: var(--primary-color);
   .account{
       margin-top: -.5rem;
       display: flex;
       flex-direction: column;
       padding: 6.24rem 1.5rem 4rem;
   
       @media screen and (min-width: 45rem) {
           display: grid;
           gap: 1rem;
           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
           padding: 6.24rem 5.5rem 4rem;
           /* place-items: center; */
   
       }
   
       .item{
        max-width: 300px;
        border: 1px solid var(--color-white);
        background-color: var(--color-white);
        padding: .7rem;
        color: var(--primary-color);
        text-align: center;
        border-radius: 1rem;
        cursor: pointer;
        .icon_cont{
.icon{
    font-size: 2rem;

}
        }
        p{
                       font-size: 1.5rem;
                       font-weight: bold;
 
        }

       }

   }



}
`;