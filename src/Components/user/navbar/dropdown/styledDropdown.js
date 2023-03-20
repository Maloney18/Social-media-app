import styled from "styled-components";


export const Dropdown = styled.div`
  position: absolute;
  top: 70px;
  width: 300px;
  max-width: 100%;
  right: 4%;
background: var(--primary-color);
box-shadow: 2px 5px 8px var(--blueViolet);
border-radius: 1.5rem;
transform: translateY(-100%);
opacity: 0;
z-index: -1;
visibility: hidden;
overflow: hidden;
pointer-events: none;
transition: opacity 500ms ease-in, transform 500ms ease-in, height 500ms ease;


ul{
  width: 100%;
  padding: .5rem;
  overflow-x: hidden;
  overflow-y: auto;
  container-type: inline-size;
background: var(--primary-color);


  &::-webkit-scrollbar {
  width: 0.3rem;
  height: 0.2rem;
}

}

.heading{
  white-space: nowrap;
  margin: 0 0 0 1.5rem;
  font-size: 8cqw;
   @media screen and (min-width: 64rem) {
          font-size: 8cqw;



          }

}

.move_to_left{
  margin: 0 0 0 .5rem;
}

.dropdown_menu_item{
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  transition: background 500ms;
  padding: 0.5rem;
  margin-top: 10px;
  text-transform: capitalize;
  
  :first-of-type{
    margin-top: 0;
    
  }

  
  &:hover{
    background: var(--color-gray-lyt);

  }
  &:has(p):hover{
    background: unset;
    cursor: text;

  }
  &:has(p) .left_icon:hover{
    cursor: pointer;

  }

  &:not(:has(.right_icon )){
    cursor: pointer;
  }

  &:not(:has(.right_icon )) .left_icon{
    cursor: default;
  }

  &:has(.right_icon ) .left_icon{
    cursor: default;
  }

  &:not(:has(.left_icon )){
    cursor: pointer;
  }

  &:has(input):hover .right_icon {
    filter: unset;
  }
  &:has(input) .right_icon {
    background: unset;
  }

  .icon{
    margin: 2px 5px 0;
    width: 50px;
    height: 50px;
    padding: 5px;
    font-size: 1rem;
    border-radius: 50%;
    cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
transition: filter 300ms;
background: var(--color-gray-lyt);

&:hover {
filter: brightness(1.2);
  color: var(--blueViolet);

}
  }

  .img_cont{
    width: max-content;
    margin: 2px 5px 0;


    .img_wrapper {
      width: calc( 70px * 0.7) ;
      height: calc( 70px * 0.7) ;
    }

  }

  .right_icon{
    margin-left: auto;
  }

  &[data-desc='requests']{
    display: none;
        @media screen and (max-width: 360px) {
      display: flex;
    }

  }
  &[data-desc="profile"]{
    display: flex;
        @media screen and (min-width: 45rem) {
      display: none;
    }

  }
  &[data-desc="create post"],&[data-desc="video"],&[data-desc="messages"]{
    display: flex;
        @media screen and (min-width: 64rem) {
      display: none;
    }

  }
}

.menu{
  width: 100%;
}

.menu-primary-enter{

  position: absolute;
  transform: translateX(-100%);
}

.menu-primary-enter-active{
  transform: translateX(0%);
  transition: all 500ms ease;
}

.menu-primary-exit{
  position: absolute;
}

.menu-primary-exit-active{
    transform: translateX(-100%);
  transition: all 500ms ease;

}
.menu-secondary-enter{

  position: absolute;
  transform: translateX(100%);
}

.menu-secondary-enter-active{
  transform: translateX(0%);
  transition: all 500ms ease;
}

.menu-secondary-exit{
  position: absolute;
}

.menu-secondary-exit-active{
    transform: translateX(100%);
  transition: all 500ms ease;

}

`;
