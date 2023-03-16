import styled from "styled-components";


export const SwitcherCont = styled.div`
display: flex;
width: max-content;
align-items: center;
justify-content: center;
p{
    font-size: .8rem;
    width: max-content;
    margin: 0 1rem;
}
`;

export const Label = styled.label`
position: relative;
width:  calc( 5rem * 0.6);
height: calc( 2rem * 0.6);

input{
    display: none;

}



`;

export const CheckBox = styled.input`

&:checked + span{
    background: var(--blueViolet);
}

&:checked + span::before{
    transform :translateX(180%);

    @media screen and (min-width:40rem){


    }

}    



`;


export const Slider = styled.span`
position: absolute;
inset: 0;
display: flex;
align-items: center;
justify-content: flex-start;
background: var(--color-gray);
border-radius: 4rem;
transition: var(--transition);
cursor: pointer;



&::before{
    content: '';
    position: absolute;
    width: calc(1.8rem * 0.5 ) ;
    height:  calc(1.8rem * 0.5 ) ;
    border-radius: 50%;
    left: 5px;
    background: var(--primary-color);
    transition: var(--transition);

    
}

`;

