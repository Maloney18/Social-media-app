import styled from "styled-components";

export const StyledStatus = styled.div`

      display: flex;
      flex-direction: row;
      margin: 0 auto;  
      max-width: 100%;
      
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }

      gap: 1rem;
      overflow-y: hidden;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-snap-align: center;
      
      
      .img_wrapper {
        cursor: default;
      }





`;