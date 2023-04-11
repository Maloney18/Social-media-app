import styled from "styled-components";

export const StyledLeftSideBar = styled.aside`
width: 100%;
display: none;
// grid-template-rows: 425px 320px;
grid-template-columns: 1fr;
align-items: start;
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