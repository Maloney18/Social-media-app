import styled from "styled-components";

export const StyledAbout = styled.div`
.lNS{
    color: var(--color-white);
    background: var(--primary-color);
    margin-top: -.5rem;
    display: flex;
    flex-direction: column;
    padding: 6.24rem 1.5rem 4rem;

    @media screen and (min-width: 64rem) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        padding: 6.24rem 5.5rem 4rem;

    }



}
`;