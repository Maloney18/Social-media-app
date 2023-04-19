import styled from "styled-components";

export const StyledRightSideBar = styled.aside`
    display: none;
    width: 100%;
    height: calc(100vh - 81.4px);
    grid-template-rows: 1fr;
        overflow-x: hidden; 
        overflow-y: auto;
        ::-webkit-scrollbar {
            display: none;
  }     
  gap: 20px;
        position: sticky;
        top: 81.4px;
        @media screen and (min-width: 45rem) {
              display: grid;
            }

        .wrapper{
            align-items: start;

            .item {
            width: 100%;
            }
            @media screen and (min-width: 45rem) {
              display: grid;
               grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));  
            }
            @media screen and (min-width: 65rem) {
              display: grid;
               grid-template-columns: unset; 
            }

        }


`;


