import styled from "styled-components";

export const StyledExplore = styled.div`
width: 100%;


.upper-most {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    &  h2{
        font-size: 1.2rem;
        width: 100%;
        text-transform: capitalize;
    }
     .see-all {
        color: grey;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.07 ease-in;
        white-space: nowrap;

        &:hover {
            color: rgb(26, 25, 25);
        }
    }
}

nav{
    width: 100%;
    margin-top: .5rem;
    position: relative;
    
    ul{
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
      

    li{
        list-style: none;
        padding: .2rem .5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space:nowrap ;
        background: var(--color-gray-lyt);
        border-radius: 20px;
        text-transform: capitalize;
        transition: 0.6s ease;
        cursor: pointer;
        &:hover {
  background: var(--blueViolet) ;
  color:var(--color-white) ;
  
}


    }

    .next, .prev {
background: rgba(0, 0, 0, 0.354);
color:var(--color-white) ;
top: 50%;
// left: 50%;
transform: translate(-50%, -50%);

&:hover {
  background: var(--color-white) ;
  color:var(--color-gray-dark) ;
  
}

}
    .next {
  right: -8%;
}
.prev {
  left: 1%;
}

  }


}


.all-suggestion {
    display: flex;
    gap: 15px;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;

}

.all-suggestion::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.1rem;
  }


`;