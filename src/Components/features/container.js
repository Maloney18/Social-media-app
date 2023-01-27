import styled from "styled-components";

export const Section = styled.section`

width: 100%;
min-height: 50vh;
padding: 0 1rem 8rem;

&:nth-of-type(1){
    min-height: 100vh;
  
}
@media screen and (min-width: 45rem) {
    padding: 3rem 2rem 8rem;
    &:nth-of-type(1){
        padding: 3rem 2rem 8rem;
  
}



}  

`;
