import styled, { keyframes } from "styled-components";


const slideUp = keyframes`
        0%{
           opacity :0 ;
           top:200px ;
        }
        60%{
           opacity :.2 ;
        }
        80%{
           opacity :.5 ;
        }
        100%{
           opacity :1 ;
           top:20px ;
        }
        

`;
export const Animate = styled.div`
    position: relative;
animation: ${slideUp} 1s ease-in-out forwards ;

`;