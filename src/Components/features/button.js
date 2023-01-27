import styled from "styled-components";

export const NavBtn = styled.button`
border: none;
padding: 1rem 2rem;
width: max-content;
background-color: var(--primary-color);
color: var(--color-white);
border-radius: 1rem;
white-space: nowrap;
text-transform: uppercase;
font-weight: bold;
cursor: pointer;
text-align: center;
font-size: var(--default-font-size);
transition: var(--transition);
&:hover{
    color: var(--primary-color);
    background-color: var(--color-white);

    &:hover{
a{
    color: var(--primary-color);

}

}


}
@media screen and (min-width: 64rem) {
    padding: 1rem 2rem;

} 
a{
    color: var(--color-white);
white-space: nowrap;
text-transform: uppercase;
font-weight: bold;
cursor: pointer;
text-align: center;
font-size: var(--default-font-size);
transition: var(--transition);

    text-decoration: none;

} 

`;